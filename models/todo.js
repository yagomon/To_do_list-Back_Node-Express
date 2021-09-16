const mongoose = require('mongoose');



const todoModel = new mongoose.Schema({
    titulo:{type: String, required: true},
    descricao:{type: String},
    prioridade:{type: String, required: true},
    status:{type: String, required:true},
    prazo:{type: String},
    dataCriacao:{type: Date, default: Date.now}
});

const Todo = mongoose.model("tarefas",todoModel);

module.exports = Todo