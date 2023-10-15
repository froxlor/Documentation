<?php
/*
 * This file is for generating the api docs
 */

class generate
{
    /**
     * @throws Exception
     */
    public function start(string $type, string $ref): void
    {
        $dir = __DIR__ . '/release';
        $file = sprintf('Froxlor-%s', $ref);
        $source = sprintf('https://github.com/Froxlor/Froxlor/archive/refs/%s/%s.zip', $type, $ref);
        $destination = sprintf('%s/%s.zip', __DIR__, $file);

        $this->task('Cleanup directories', function () use ($dir) {
            if (is_dir($dir)) {
                $this->delTree($dir);
                if (!mkdir($dir)) {
                    throw new Exception('Failed to create directory "' . $dir . '"');
                }
            }
        });

        $this->task('Get from github', function () use ($source, $destination) {
            if (!copy($source, $destination)) {
                throw new Exception('Failed to get release!');
            }
        });

        $this->task('Extract from zip', function () use ($destination, $dir) {
            $zip = new ZipArchive;
            if ($zip->open($destination)) {
                $zip->extractTo($dir);
                $zip->close();
            } else {
                throw new Exception('Cannot extract file!');
            }
        });

        $this->task('Install composer packages', function () use ($dir, $file) {
            $command = sprintf('cd %s/%s && composer install 2> /dev/null', $dir, $file);
            if (exec($command) === false) {
                throw new Exception('Failed to install packages! Command: ' . $command);
            }
        });

        $this->task('Copy file generator to froxlor', function () use ($dir, $file) {
            if (!copy(__DIR__ . '/api-local.php', $dir . '/' . $file . '/api-local.php')) {
                throw new Exception('Failed to install packages!');
            }
        });

        $this->task('Generate docs', function () use ($dir, $file, $ref) {
            $command = escapeshellcmd('php ' . $dir . '/' . $file . '/api-local.php ' . $ref);
            if (!$result = exec($command)) {
                throw new Exception('Failed to generate docs! Command: ' . $command);
            } else {
                echo $result . PHP_EOL;
            }
        });

        $this->task('Cleanup directories', function () use ($dir, $destination) {
            if (is_dir($dir)) {
                $this->delTree($dir);
            }
            if (is_file($destination)) {
                unlink($destination);
            }
        });

    }

    private function task($description, $closure)
    {
        echo " ⚡ $description ...\r";
        $closure();
        echo " ✓ $description." . PHP_EOL;
    }

    private function delTree($dir): bool
    {
        $files = array_diff(scandir($dir), array('.', '..'));
        foreach ($files as $file) {
            (is_dir("$dir/$file")) ? $this->delTree("$dir/$file") : unlink("$dir/$file");
        }
        return rmdir($dir);
    }
}

$debug = new generate();
$debug->start($argv[1] ?? 'heads', $argv[2] ?? 'main');
