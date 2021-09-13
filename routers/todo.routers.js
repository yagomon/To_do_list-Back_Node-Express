const express = require('express');
const router = express.Router();
const Todo = require ('../models/todo');

// Create
router.post('/add', async(req,res) => {
    await Todo.create(req.body)
    .then(()=>{
        res.status(200).send("Tarefa adicionada com sucesso");
    }).catch((err) => {
        res.status(400).send("Algo errado com a tarefa, tente novamente");
        console.error(err)
    })
});

// Read All
router.get('/', async(req,res) => {
    await Todo.find({})
    .then((tarefas) => {
        res.status(200).send(tarefas);
    })
    .catch((err) => {
        res.status(400).send("Algo errado com as tarefas, tente nomamente");
        console.log(err);
    })
});

// Read id
router.get('/findById/:id', async (req, res) => {
    await Todo.find({_id : req.params.id})
    .then((tarefa) =>{
        res.status(200).send(tarefa)
    })
    .catch((err) => {
        res.status(400).send("Algo errado com a tarefa, tente nomamente")
        console.log(err)
    })
});

router.put("/update/:id", async(req, res) =>{
    await Todo.updateOne({_id : req.params.id}, req.body)
    .then(() => {
        res.status(200).send("Atualizado com sucesso");
    })
    .catch((err) => {
        res.status(400).send("Algo errado com a tarefa, Tente novamente");
        console.log(err);
    });
});

router.delete("/delete/:id", async (req, res) => {
    await Todo.deleteOne({_id : req.params.id})
    .then(() => {
        res.status(200).send("Deletado com sucesso");
    })
    .catch(() => {
        res.status(400).send("Algo errado com a tarefa, Tente novamente");
        console.log(err);
    });
});


module.exports = router;