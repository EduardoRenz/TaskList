<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes
// $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Obtem todas as listas de tarefas
$app->get('/', function (Request $request, Response $response, array $args) {
    try {
        //Retorna todas as tarefas
        $query = "select * from list";
        $stm = $this->pdo->prepare($query);
        // $stm->bindParam('user',$user);
        $stm->execute();
        $lists = $stm->fetchAll(PDO::FETCH_OBJ );
        $stm = null;

        foreach ($lists as $key => $list) {
            //Retorna todas as tasks desta lista
            $query = "select * from task where list_id = :id";
            $stm = $this->pdo->prepare($query);
            $stm->bindParam(':id',$list->id);
            $stm->execute();
            $tasks = $stm->fetchAll(PDO::FETCH_OBJ );
            $stm = null;
            $list->tasks = $tasks;
        }
    return $response->withJson($lists, 200);
    } catch (\Throwable $th) {
        return $response->withJson(array("message"=>"Erro ao retornar listas"), 400);
    }

});


//Adiciona uma nova lista de tarefas
$app->post('/', function (Request $request, Response $response, array $args) {
    try {
        $json = $request->getBody();
        $data = json_decode($json, true); // parse the JSON into an assoc. array
        $this->pdo->beginTransaction();
        $query = "insert into list (title ) values(:title)";
        $stm = $this->pdo->prepare($query);
        $stm->bindParam(':title',$data['title']);
        $stm->execute();
        $id = $this->pdo->lastInsertId();


    foreach ($data['tasks']  as $key => $task) {
        $completed = $task['completed'] ? 1 : 0;
        $insert = "insert into task (task,completed,list_id) values (:task,:completed,:list_id)";
        $stmI = $this->pdo->prepare($insert);
        $stmI->bindParam(':task',$task['task']);
        $stmI->bindParam(':completed',$completed);
        $stmI->bindParam(':list_id', $id );
        $stmI->execute();

        print_r( $this->pdo->errorInfo());
    }
    $this->pdo->commit();
    $data = json_decode($json, true); // parse the JSON into an assoc. array
    return $response->withJson(array($json), 201);

    } catch (\Throwable $th) {
        $this->pdo->rollback();
        return $response->withJson(array("message"=>"Erro ao adicionar nova lista de tarefas"), 400);
    }
});


//Adiciona uma nova lista de tarefas
$app->put('/[{id}]', function (Request $request, Response $response, array $args) {
    $json = $request->getBody();
    $data = json_decode($json, true); // parse the JSON into an assoc. array
    try {
        $this->pdo->beginTransaction();
        $query = "update list set title = :title where id = :id";
        $stm = $this->pdo->prepare($query);
        $stm->bindParam(':id',$args['id']);
        $stm->bindParam(':title',$data['title']);
        $stm->execute();
        $stm = null;

        foreach ($data['tasks'] as $key => $task) {
            if(!isset($task['id'])){
                $insert = "insert into task (task,completed,list_id) values (:task,:completed,:list_id)";
                $completed = $task['completed'] ? 1 : 0;

                $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $stmI = $this->pdo->prepare($insert);
                $stmI->bindParam(':task',$task['task']);
                $stmI->bindParam(':completed',$completed);
                $stmI->bindParam(':list_id',$args['id']);
                $stmI->execute();
            }
            else{
                echo "fazendo update de".$task['id'];
                $update = "update task set  completed = :completed where id = :id";
                $completed = $task['completed'] ? 1 : 0;

                $stmu = $this->pdo->prepare($update);
                $stmu->bindParam(':completed',$completed);
                $stmu->bindParam(':id',$task['id']);
                $stmu->execute();
                print_r($this->pdo->errorInfo());
            }
        }
        $this->pdo->commit();
    } catch (\Throwable $th) {
        return $response->withJson(array('success'=>false), 400);
    }

    return $response->withJson(array('success'=>true), 201);
    print_r($data );
});

//Delete task de uma lista
$app->delete('/task/[{id}]', function (Request $request, Response $response, array $args) {
    $json = $request->getBody();

    $query = "delete from task where id = :id";
    $stm = $this->pdo->prepare($query);
    $stm->bindParam(':id',$args['id']);
    $stm->execute();

    $data = json_decode($json, true); // parse the JSON into an assoc. array
    return $response->withJson(array('deleted'=>true), 201);
});



//Delete uma lista
$app->delete('/[{id}]', function (Request $request, Response $response, array $args) {

    $query = "delete from task where list_id = :id";
    $stm = $this->pdo->prepare($query);
    $stm->bindParam(':id',$args['id']);
    $stm->execute();


    $query = "delete from list where id = :id";
    $stm = $this->pdo->prepare($query);
    $stm->bindParam(':id',$args['id']);
    $stm->execute();
    return $response->withJson(array('deleted'=>true), 201);
});