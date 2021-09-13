const mongoose = require('mongoose');



const todoModel = new mongoose.Schema({
    título:{type: String, required: true},
    descrição:{type: String},
    prioridade:{type: String, required: true},
    status:{type: String, required:true},
    prazo:{type: String},
    dataCriação:{type: Date, default: Date.now}
});

const Todo = mongoose.model("tarefas",todoModel);

module.exports = Todo