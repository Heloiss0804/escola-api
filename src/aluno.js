import conexao from "./banco.js";

// Funções para o CRUD
//Função para exibir todos os alunos do banco
function ler(res){

    //Seleciona todos os alunos, por ordem de todos os nomes
    const sql = "SELECT * FROM alunos ORDER BY nome";


    //Executando a query a partir da conexão
    conexao.query(sql,(erro,resultados)=>{
        
         if(resultados === 0){
            res.status(204).end()
            return; // forçar a interrupção do código
         }

         // Verificação básica de erro
         if(erro){
            // Se o erro, exibir status 400 e informar qual foi erro
            res.status(400).json(erro.code);

         }else {
            //se der certo apresenta o status 200 e exibe o resultado (no formato JSON)
            res.status(200).json(resultados);
         }

    });

   
}

//Função para cadastrar os alunos no banco
function inserir(aluno,res){
   const sql = "INSERT INTO alunos SET ?";

   conexao.query(sql,aluno, (erro) => {
      if(erro){
         res.status(400).json(erro.code);
      } else {
         res.status(201).json({"status" : "aluno inserido!"})
      }    
   });
}

//Função para exibir UM aluno
function lerUm(id, res){
   const sql = "SELECT * FROM alunos WHERE id = ?";

   conexao.query(sql,id, (erro,resultados)=> {

      if(resultados === 0){
         res.status(204).end();
         return;// forçar a interrupção do código
      }

       // If para erro ou resultado
   if(erro){
        res.status(400).json(erro.code);
   }else {
        res.status(200).json(resultados);
   }

   }) ;
       //checando se há contéudo
 
}

// Função que exclui um aluno
function excluir(id, res) {
   const sql = "DELETE FROM alunos WHERE id = ?";

   conexao.query(sql, id, (erro, resultados) => {
      if (erro) {
         res.status(400).json(erro.code);
      } else {
         res.status(200).json({ "status": "Aluno excluido!", id});
      }
   });
}

// Função para atualizar um aluno no banco
function atualizar(id, aluno, res) {
   const sql = "UPDATE alunos SET ? WHERE id = ?";

   conexao.query(sql, [aluno, id], (erro, resultados) => {
      if (erro) {
         res.status(400).json(erro.code);
      } else {

         // ... reticências é chamado de spread operador (operador de espalhamento de objeto).
         res.status(200).json({ ...aluno, id});
      }
   });

}




export { ler, inserir, lerUm, excluir, atualizar};
