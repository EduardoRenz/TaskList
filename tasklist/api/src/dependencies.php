<?php
// DIC configuration

$container = $app->getContainer();

// view renderer
$container['renderer'] = function ($c) {
    $settings = $c->get('settings')['renderer'];
    return new Slim\Views\PhpRenderer($settings['template_path']);
};

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushProcessor(new Monolog\Processor\UidProcessor());
    $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
    return $logger;
};

$container['pdo'] = function ($c) {
    $pdo_config = $c->get('settings')['db'];
    $dsn = "mysql:dbname=" . $pdo_config['dbname'] . ";host=" . $pdo_config['host'];
    $pdo = new PDO($dsn, $pdo_config['user'], $pdo_config['password'], [
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'UTF8'"
    ]);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
};

################
### Actions ####
################
$container[App\Action\HomeAction::class] = function ($c) {
    return new App\Action\HomeAction($c['logger'], $c['view'], $c['pdo']);
};