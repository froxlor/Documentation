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

    public function start()
    {
        $dir = __DIR__ . '/current';

        echo "Cleanup ..." . PHP_EOL;
        if (is_dir($dir)) {
            $this->delTree($dir);
            mkdir($dir);
        }

        echo "Get from github ..." . PHP_EOL;
        copy('https://github.com/Froxlor/Froxlor/archive/refs/heads/master.zip', __DIR__ . '/Froxlor-master.zip');

        echo "Extract from zip ..." . PHP_EOL;
        $zip = new ZipArchive;
        if ($zip->open(__DIR__ . '/Froxlor-master.zip')) {
            $zip->extractTo($dir);
            $zip->close();
        } else {
            die('Cannot extract file!');
        }

        echo "Install composer packages ..." . PHP_EOL;
        exec('cd ' . $dir . '/Froxlor-master && composer install');

        echo "Copy file generator to froxlor ..." . PHP_EOL;
        copy(__DIR__ . '/api-local.php', $dir . '/Froxlor-master/api-local.php');

        echo exec('php ' . $dir . '/Froxlor-master/api-local.php') . PHP_EOL;
    }
}

$debug = new generate();
$debug->start();