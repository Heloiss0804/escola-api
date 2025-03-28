import express from 'express';
import { ler } from './src/aluno.js';


const app = express();
const porta = 3000;

//Configurando Rotas

//Raiz da API
app.get('/', (req, res) => {
  res.send(`API ultilizando Node.js, Espress e Mysql`);
});

//Exibindos TODOS os alunos
app.get('/alunos', (req, res) =>{
    //res.send(`Exibindo todos os alunos`);
    ler(res);
});

//Exibindo UM aluno
app.get('/alunos/:id', (req, res) =>{
    res.send(`Exibindo de UM alunos`);
})

//Inserindo/Cadastrando/Adicionando um aluno
app.post('/alunos', (req, res) => {
    res.send (`Inserir dados de UM aluno`);
});

//Atualizando aluno
app.patch('/alunos/:id', (req, res) =>{
    res.send(`Atualizando dados do aluno`);
})

//Excluindo aluno
app.delete('/alunos/:id', (req, res) =>{
    res.send(`Aluno excluido com sucesso`);
})

app.listen(porta, () => {
    console.log (`Servidor rodando na porta ${porta}`);
});