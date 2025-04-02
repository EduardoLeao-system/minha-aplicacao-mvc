//models/tarefaModel.js 

let tarefas = []; 
function  adicionarTarefa ( descrição ) { 
    tarefas. push ({ id : Data.agora (), descrição } ) ; 
} 
function  obterTarefas ( ) { 
    return tarefas; 
} 
function  removedorTarefa ( id ) { 
    tarefas = tarefas. filter ( tarefa => tarefa. id !== id); 
} 
módulo . exportações = { adicionarTarefa, obterTarefas, removerTarefa };