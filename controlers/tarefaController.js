// controllers/tarefaController.js 

const  Tarefa = require ( '../models/tarefaModel' ); 
exportações . exibirTarefas = ( req, res ) => { 
    const tarefas = Tarefa . obterTarefas (); 
    res. render ( 'índice' , { tarefas }); 
}; 
exportações . adicionarTarefa = ( req, res ) => { 
    const { descrição } = req. corpo ; 
    Tarefa . adicionarTarefa (descrição); 
    res. redirecionar ( '/' ); 
}; 
exportações . removedorTarefa = ( req, res ) => { 
    const { id } = req. parâmetros ; 
    Tarefa . removerTarefa ( parseInt (id)); 
    res. redirecionar ( '/' ); 
};