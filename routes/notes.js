const route=require('express').Router()
const{Notes}=require('../db')

route.get('/', async(req,res)=>{
    const notes= await Notes.findAll()
    res.send(notes)
   
})

route.post('/', async (req, res) => {  
    if (typeof req.body.task !== 'string') {  
      return res.status(400).send({ error: 'Task name not provided' })  
    } 
    if (typeof req.body.note !== 'string') {  
        return res.status(400).send({ error: 'Note not provided' })  
      } 
   
  
    const newNote = await Notes.create({  

        task: req.body.task,  
        note:req.body.note,
      
    })
    res.status(201).send({ success: 'New note added', data: newNote })

})

module.exports=route