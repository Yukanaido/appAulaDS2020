<?php

include('../../banco/conexao.php');

if(!$conexao){
    $dados = array(
        'tipo' => 'info',
        'mensagem' => 'Ops, não foi possível obter uma conexão com o banco de dados, tente mais tarde..'
    );
} else{
    $requestData = $_REQUEST;

    //$requestData = array_map('utf9_decode', $requestData);

    $requestData['ativo'] = $requestData['ativo'] == 'on' ? 'S' : 'N';

    $requestData['dataagora'] = date('Y-d-m H:i:s', strtotime($requestData['dataagora']));

    if(empty($requestData['nome']) || empty($requestData['ativo'])){
        $dados = array(
            'tipo' => 'info',
            'mensagem' => 'Existe(m) campo(s) obrigatório(s) vazio(s).'
    } else{

        $sqlComando = "INSERT INTO CATEGORIAS(nome), ativo, datacriacao, datamodificacao
        VALUES ('$requestData[nome]', '$requestData[ativo], '$requestData[dataagora], '$requestData[dataagora]')";

        $resultado = mysqli_query($conexao, $sqlComando);

        if($resultado){
            $dados = array(
                'tipo' => 'success',
                'mensagem' => 'Categoria criada com sucesso.'
        }else {
            $dados = array(
                'tipo' => 'error',
                'mensagem' => 'Não foi possível criar a categoria.'
        }
    }
    mysqli_close($conexao);
}

echo json_encode($dados);