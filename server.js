const express=require('express')
const path=require('path')
const todoroute=require('./routes/todos')

const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/hello' ,function(res,req){
    res.send("hello")
})

app.use('/',express.static(path.join(__dirname,'public')))
app.use('/todos',todoroute)
app.listen(2678, ()=>console.log("sever started at http://localhost:2678"))