import express from 'express';

const app = express();
const porta = 3000;

//Configurando Rotas

//Raiz da API
app.get('/', (req, res) => {
  res.send(`API ultilizando Node.js, Espress e Mysql`);
});

//Exibindos TODOS os alunos
app.get('/alunos', (req, res) =>{
    res.send(`Exibindo todos os alunos`);
})

//Exibindo UM aluno
app.get('/alunos/1', (req, res) =>{
    res.send(`Exibindo de UM alunos`);
})

//Inserindo/Cadastrando/Adicionando um aluno
app.post('/alunos', (req, res) => {
    res.send (`Exibindo dados de UM aluno`);
});

//Atualizando aluno
app.patch('alunos/1', (req, res) =>{
    res.send(`Atualizando dados do aluno`);
})

//Excluindo aluno
app.delete('alunos/1', (req, res) =>{
    res.send(`Aluno excluido com sucesso`);
})

app.listen(porta, () => {
    console.log (`Servidor rodando na porta ${porta}`);
});