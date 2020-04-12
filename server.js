const express=require('express')

const { db } = require('./db')

const path=require('path')

const todoroute=require('./routes/todos')
const noteroute=require('./routes/notes')

const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/',express.static(path.join(__dirname,'public')))

app.use('/todos',todoroute)
app.use('/notes',noteroute)

db.sync({force:true})
  .then(() => {
    app.listen(6543)
  })
  .catch((err) => {
    console.error(err)
  })