<?php

namespace Froxlor\Api\Commands;

use Exception;

require __DIR__ . '/vendor/autoload.php';

class ApiLocal
{
    /**
     * generate the api documentation from froxlor.
     *
     * @return void
     * @throws Exception
     */
    public function generateDocs($arguments)
    {
        $version = $arguments[1];
        $dir = __DIR__ . '/../../../api-guide/commands';
        if (!is_dir($dir)) {
            mkdir($dir, 0777, true);
        }

        foreach ($this->getModuleCollections() as $module => $collection) {
            $data = $this->parseModuleCollection($module, $collection);
            $file = sprintf('%s/%s.md', $dir, strtolower($module));
            file_put_contents($file, $data);
        }

        echo " ✓ Files for release " . $version . " generated!" . PHP_EOL;
    }

    /**
     * parse a module with commands.
     *
     * @param string $module
     * @param array $collection
     * @return string
     */
    private function parseModuleCollection(string $module, array $collection): string
    {
        // init document
        $data = [
            sprintf('# %s', $module)
        ];

        // add content for each function
        foreach ($collection as $function => $item) {
            $data[] = sprintf('## %s.%s', $module, $function);
            $data[] = sprintf('%s', $item['head']);

            // shows the access type
            if (isset($item['access'])) {
                $data[] = "#### Permission";
                $data[] = sprintf('`%s`', implode('` `', explode(', ', $item['access']['groups'])));
            }

            // shows the params type
            if (isset($item['params_list']) && count($item['params_list'])) {
                $data[] = "#### Parameter";
                $data[] = $this->generateMarkdownTable(['Field', 'Type', 'Description'], $item['params_list']);
            }

            // shows the response type
            if (isset($item['return_type']) && $item['return_type'] != -1) {
                $data[] = "#### Response";
                $data[] = sprintf('`%s`',
                        $item['return_type']) . ($item['return_desc'] && $item['return_desc'] != -1 ? sprintf(' as `%s`',
                        $item['return_desc']) : null);
            }

            // only for debug
            //$data[] = json_encode($item, JSON_PRETTY_PRINT);
        }

        return implode("\n\n", $data);
    }

    /**
     * generate Markdown table from given array.
     *
     * @param array $headings
     * @param array $rows
     * @return string
     */
    private function generateMarkdownTable(array $headings, array $rows): string
    {
        // heading
        $data = [
            sprintf('| %s |', implode(' | ', $headings)),
            sprintf('| %s |', implode(' | ', str_replace($headings, ":---", $headings))),
        ];

        // rows
        foreach ($rows as $cols) {
            $data[] = sprintf('| %s |', implode(' | ', str_replace("|", "\|", $cols)));
        }

        return implode("\n", $data);
    }

    /**
     * get all functions from a module.
     *
     * @return array
     * @throws Exception
     */
    private function getModuleCollections(): array
    {
        $m_arr = $this->listFunctions();

        // initialize output-array
        $output_arr = array();

        // check every module
        foreach ($m_arr['data'] as $module) {
            // initialize module array for sorting
            if (!isset($output_arr[$module['module']]) || !is_array($output_arr[$module['module']])) {
                $output_arr[$module['module']] = array();
            }

            // set necessary data
            $output_arr[$module['module']][$module['function']] = array(
                'return_type' => (isset($module['return']['type']) && $module['return']['type'] != "" ? $module['return']['type'] : -1),
                'return_desc' => (isset($module['return']['desc']) && $module['return']['desc'] != "" ? $module['return']['desc'] : -1),
                'params_list' => array(),
                'head' => $module['head'],
                'access' => $module['access'] ?? null
            );

            if (isset($module['params']) && is_array($module['params'])) {
                foreach ($module['params'] as $param) {
                    $output_arr[$module['module']][$module['function']]['params_list'][] = array(
                        'name' => $param['parameter'],
                        'type' => $param['type'],
                        'desc' => $param['desc']
                    );
                }
            }
        }

        // sort array
        ksort($output_arr);

        return $output_arr;
    }

    /**
     * returns a list of all available api functions.
     * @throws Exception
     */
    private function listFunctions(): array
    {
        //	$module = $this->getParam('module', true, '');

        $functions = array();
        // check all the modules
        $path = __DIR__ . '/lib/Froxlor/Api/Commands/';
        // valid directory?
        if (is_dir($path)) {
            // create RecursiveIteratorIterator
            $its = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($path));
            // check every file
            foreach ($its as $it) {
                // does it match the Filename pattern?
                $matches = array();
                if (preg_match("/^(.+)\.php$/i", $it->getFilename(), $matches)) {
                    // check for existence
                    try {
                        // set the module to be in our namespace
                        $mod = $matches[1];
                        $this->requireModules($mod);
                    } catch (Exception $e) {
                        // @todo log?
                        continue;
                    }
                    // now get all static functions
                    $reflection = new \ReflectionClass(__NAMESPACE__ . '\\' . $mod);
                    $_functions = $reflection->getMethods(\ReflectionMethod::IS_PUBLIC);
                    foreach ($_functions as $func) {
                        if ($func->class == __NAMESPACE__ . '\\' . $mod && $func->isPublic() && !$func->isStatic()) {
                            $functions[] = array_merge(array(
                                'module' => $matches[1],
                                'function' => $func->name
                            ), $this->getParamListFromDoc($matches[1], $func->name));
                        }
                    }
                }
            }
        } else {
            // yikes - no valid directory to check
            throw new Exception("Cannot search directory '" . $path . "'. No such directory.", 500);
        }
        // return the list
        $response = array();
        $response['status'] = 200;
        $response['status_message'] = "successfull";
        $response['data'] = $functions;

        return $response;
    }

    /**
     * generate an api-response to list all parameters and the return-value of
     * a given module.function-combination
     *
     * @param string $module
     * @param string $function
     *
     * @return array|bool
     * @throws Exception
     */
    private function getParamListFromDoc($module = null, $function = null)
    {
        try {
            // set the module
            $cls = new \ReflectionMethod(__NAMESPACE__ . '\\' . $module, $function);
            $comment = $cls->getDocComment();
            if ($comment == false) {
                return array(
                    'head' => 'There is no comment-block for "' . $module . '.' . $function . '"'
                );
            }

            $clines = explode("\n", $comment);
            $result = array();
            $result['params'] = array();
            $param_desc = false;
            $r = array();
            foreach ($clines as $c) {
                $c = trim($c);
                // check param-section
                if (strpos($c, '@param')) {
                    preg_match('/^\*\s\@param\s(.+)\s(\$\w+)(\s.*)?/', $c, $r);
                    // cut $ off the parameter-name as it is not wanted in the api-request
                    $result['params'][] = array(
                        'parameter' => substr($r[2], 1),
                        'type' => $r[1],
                        'desc' => (isset($r[3]) ? trim($r['3']) : '')
                    );
                    $param_desc = true;
                } elseif (strpos($c, '@access')) {
                    // check access-section
                    preg_match('/^\*\s\@access\s(.*)/', $c, $r);
                    if (empty($r[0])) {
                        $r[1] = 'This function has no restrictions';
                    }
                    $result['access'] = array(
                        'groups' => (isset($r[1]) ? trim($r[1]) : '')
                    );
                } elseif (strpos($c, '@return')) {
                    // check return-section
                    preg_match('/^\*\s\@return\s(\w+)(\s.*)?/', $c, $r);
                    if (!isset($r[0]) || empty($r[0])) {
                        $r[1] = 'null';
                        $r[2] = 'This function has no return value given';
                    }
                    $result['return'] = array(
                        'type' => $r[1],
                        'desc' => (isset($r[2]) ? trim($r[2]) : '')
                    );
                } elseif (!empty($c) && strpos($c, '@throws') === false) {
                    // check throws-section
                    if (substr($c, 0, 3) == "/**") {
                        continue;
                    }
                    if (substr($c, 0, 2) == "*/") {
                        continue;
                    }
                    if (substr($c, 0, 1) == "*") {
                        $c = trim(substr($c, 1));
                        if (empty($c)) {
                            continue;
                        }
                        if ($param_desc) {
                            $result['params'][count($result['params']) - 1]['desc'] .= $c;
                        } else {
                            if (!isset($result['head']) || empty($result['head'])) {
                                $result['head'] = $c . " ";
                            } else {
                                $result['head'] .= $c . " ";
                            }
                        }
                    }
                }
            }
            $result['head'] = trim($result['head']);
            return $result;
        } catch (\ReflectionException $e) {
            return array();
        }
    }

    /**
     * this functions is used to check the availability
     * of a given list of modules.
     * If either one of
     * them are not found, throw an Exception
     *
     * @param string|array $modules
     *
     * @throws Exception
     */
    private function requireModules($modules = null)
    {
        if ($modules != null) {
            // no array -> create one
            if (!is_array($modules)) {
                $modules = array(
                    $modules
                );
            }
            // check all the modules
            foreach ($modules as $module) {
                try {
                    $module = __NAMESPACE__ . '\\' . $module;
                    // can we use the class?
                    if (class_exists($module)) {
                        continue;
                    } else {
                        throw new Exception(
                            'The required class "' . $module . '" could not be found but the module-file exists', 404
                        );
                    }
                } catch (Exception $e) {
                    // The autoloader will throw an Exception
                    // that the required class could not be found
                    // but we want a nicer error-message for this here
                    throw new Exception(
                        'The required module "' . $module . '" could not be found' . PHP_EOL . $e->getMessage(), 404
                    );
                }
            }
        }
    }
}

$api = new ApiLocal();
$api->generateDocs($argv);
