const route=require('express').Router()
const{Todos}=require('../db')
const{Notes}=require('../db')

route.get('/', async(req,res)=>{
    const todos= await Todos.findAll()

    res.send(todos)
   
})

route.get('/:id', async (req, res) => {
    if (isNaN(Number(req.params.id))) {  
      return res.status(400).send({  
        error: 'todo id must be an integer',  
      })  
    }   
  
    const todo = await Todos.findByPk(req.params.id)  
  
    if (!todo) {  
      return res.status(404).send({  
        error: 'No todo found with id = ' + req.params.id,  
      })  
    }  

    res.send(todo)
  
})
  
  
  
  route.post('/', async (req, res) => {  
    if (typeof req.body.task !== 'string') {  
      return res.status(400).send({ error: 'Task name not provided' })  
    } 
    if (req.body.status == 'complete') {  
      req.body.status = true  
    } else {  
      req.body.status = false  
    }
  
    const newTodo = await Todos.create({  

        task: req.body.task,  
        desc:req.body.desc,
        done: req.body.done, 
        status:req.body.status, 
        due: req.body.due, 
        priority:req.body.priority 
    })
    res.status(201).send({ success: 'New task added', data: newTodo })

})

route.get('/:id/notes', async (req, res) => {
    if (isNaN(Number(req.params.id))) {  
      return res.status(400).send({  
        error: 'task id must be an integer',  
      })  
    }   
  
    const note = await Notes.findAll({
        where: {
            todoId: req.params.id
          }
    })  
  
    if (!note) {  
      return res.status(404).send({  
        error: 'No todo found with id = ' + req.params.id,  
      })  
    }  

    res.send(note)
  
})

route.post('/:id/notes', async (req, res) => {  

    if (isNaN(Number(req.params.id))) {  
        return res.status(400).send({  
          error: 'task id must be an integer',  
        })  
      }   
    
    if (typeof req.body.note !== 'string') {  
        return res.status(400).send({ error: 'Note not provided' })  
      }    
    
    const newNote = await Notes.create({ 
        
        todoId:Number(req.params.id), 
        note:req.body.note,
      
    })
    if(!newNote){
        return res.status(400).send({  
            error: 'failed to create object',  
          })  
    }
    res.status(201).send({ success: 'New note added', data: newNote })

})


module.exports=route