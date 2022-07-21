#!php

<?php

require __DIR__ . '/vendor/autoload.php';

$app = new \Symfony\Component\Console\Application("My Application", 1.0);

$app->add(new LoadCommand());

$app->run();