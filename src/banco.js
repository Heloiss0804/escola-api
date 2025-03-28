import mysql from 'mysql2';     // importando o módulo

//Armazenaou os dados de conexão
const conexao = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'escola-api'
});

//Conectando e passando mensagem (de erro ou sucesso)
conexao.connect( erro => {
    if(erro){
        console.error(`Erro ao conectar: ${erro.message}`);
    }else {
        console.log(`Banco de dados conectado com sucesso.`)
    }
});

//exportando o recurso
export default conexao;