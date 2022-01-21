<?php
/*
 * This file is for generating the api docs
 */

class generate
{
    public function delTree($dir): bool
    {
        $files = array_diff(scandir($dir), array('.','..'));
        foreach ($files as $file) {
            (is_dir("$dir/$file")) ? $this->delTree("$dir/$file") : unlink("$dir/$file");
        }
        return rmdir($dir);
    }

    /**
     * @throws Exception
     */
    public function start($arguments)
    {
        if (!isset($arguments[1])) {
            throw new Exception('No ref set!');
        }

        $ref = $arguments[1];
        $dir = __DIR__ . '/release';
        $file = 'Froxlor-' . $ref;

        echo "Cleanup ..." . PHP_EOL;
        if (is_dir($dir)) {
            $this->delTree($dir);
            mkdir($dir);
        }

        echo "Get from github ..." . PHP_EOL;
        if(!copy('https://github.com/Froxlor/Froxlor/archive/refs/tags/' . $ref . '.zip', __DIR__ . '/' . $file . '.zip')) {
            throw new Exception('Failed to get release!');
        }

        echo "Extract from zip ..." . PHP_EOL;
        $zip = new ZipArchive;
        if ($zip->open(__DIR__ . '/' . $file . '.zip')) {
            $zip->extractTo($dir);
            $zip->close();
        } else {
            throw new Exception('Cannot extract file!');
        }

        echo "Install composer packages ..." . PHP_EOL;
        $command = 'cd ' . $dir . '/' . $file . ' && composer install';
        if(!exec($command)) {
            throw new Exception('Failed to install packages! Command: ' . $command);
        };

        echo "Copy file generator to froxlor ..." . PHP_EOL;
        if(!copy(__DIR__ . '/api-local.php', $dir . '/' . $file . '/api-local.php')) {
            throw new Exception('Failed to install packages!');
        }

        $command = escapeshellcmd('php ' . $dir . '/' . $file . '/api-local.php ' . $ref);
        if(!$result = exec($command)) {
            throw new Exception('Failed to generate docs! Command: ' . $command);
        } else {
            echo $result . PHP_EOL;
        }
    }
}

$debug = new generate();
$debug->start($argv);