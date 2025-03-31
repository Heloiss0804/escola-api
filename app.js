import express from 'express';
import { ler, inserir, lerUm, excluir,atualizar} from './src/aluno.js';


const app = express();
const porta = 3000;

//habilitando para dar suporte ao formato JSON
app.use(express.json())

// habilitando para dar suporte a dados inseridos a partir de inputs de formulário
app.use(express.urlencoded({extended:true}));

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
app.patch('/alunos/:id', (req, res) =>{
   // res.send(`Atualizando dados do aluno`);
   
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