import express from 'express';
import { ler, inserir, lerUm, excluir,atualizar} from './src/aluno.js';
import cors from 'cors';


const app = express();
const porta = process.env.PORT || 3000;

//habilitando para dar suporte ao formato JSON
app.use(express.json())

app.use(cors());

// habilitando para dar suporte a dados inseridos a partir de inputs de formulário
app.use(express.urlencoded({extended:true}));

//Configurando Rotas

//Raiz da API
app.get('/', (req, res) => {
  // res.send(`API ultilizando Node.js, Espress e Mysql`);
  res.redirect('https://documenter.getpostman.com/view/43562390/2sB2cSi4Cw');


});

//Exibindos TODOS os alunos
app.get('/alunos', (req, res) =>{
    //res.send(`Exibindo todos os alunos`);
    ler(res);
});

//Exibindo UM aluno
app.get('/alunos/:id', (req, res) =>{
    //res.send(`Exibindo de UM alunos`);
 
    //capturando o ID que vem do endpoint
    const id = parseInt(req.params.id);

    //chamar a função
    lerUm(id, res);
});

//Inserindo/Cadastrando/Adicionando um aluno
app.post('/alunos', (req, res) => {
   // res.send (`Inserir dados de UM aluno`);

   //capturar os dados a partir do corpo da requisição
   const novoAluno = req.body;

   //capturando a função inserir e passando os parâmetros novoAluno e res
   inserir(novoAluno,res)
});

//Atualizando aluno
app.patch('/alunos/:id', (req, res) => {
   // res.send(`Atualizando dados do aluno`);

   //capturar id
   const id = parseInt(req.params.id);

   //pegando as informações do body
   const aluno = req.body;

    atualizar(id, aluno, res);
});

//Excluindo aluno
app.delete('/alunos/:id', (req, res) =>{
   // res.send(`Aluno excluido com sucesso`);

   // capturando o id
   const id = parseInt(req.params.id);

   excluir(id,res);
});

app.listen(porta, () => {
    console.log (`Servidor rodando na porta ${porta}`);
});