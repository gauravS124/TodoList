function getTask(done){
    $.get('/todos',function(data){
        done(data)

    })
}

function createTaskCardI(Task){
    return $(`   
    <div class="col-sm-10 card m-0 p-0" >
   <div class="card-header m-0 row bg-danger text-white" id="head" >
   <div class="col" id="task">${Task.task}</div>
       <div class="col text-right due" id="due">${Task.due}</div>
   </div>
   <div class="card-body row">
       <div class="col" id="desc">${Task.desc}</div>
       <button class="btn btn-danger col col-sm-2"  id="priority">${Task.priority}</button>
   </div>
   </div>`)
}
function createTaskCardC(Task){
    return $(`   
    <div class="col-sm-10 card m-0 p-0" >
   <div class="card-header m-0 row bg-success text-white" id="head" >
   <div class="col" id="task">${Task.task}</div>
       <div class="col text-right due" id="due">${Task.due}</div>
   </div>
   <div class="card-body row">
       <div class="col" id="desc">${Task.desc}</div>
       <button class="btn btn-danger col col-sm-2"  id="priority">${Task.priority}</button>
   </div>
   </div>`)
}

function addTask(task,desc,due,status,priority,done){
    $.post('todos',{
        task:task,
        desc:desc,
        due:due,
        status:status,
        priority:priority
        },function (data){
            done(data)
        })

}

function add(){
    let taskname=document.getElementById("task").value
    let taskdesc=document.getElementById("desc").value
    let taskdue=document.getElementById("due").value
    let status=$("input[type='radio'][name='status']:checked").val()
    let priority=$("input[type='radio'][name='gridRadios1']:checked").val();

    addTask(
        taskname,
        taskdesc,
        taskdue,
        status,
        priority,
        function(addedTask){
            window.alert("Added "+addedTask.task+" to database")
        }
        )
}




$(function(){

    let tasklist=$('#tasklist')    

    getTask(function(tasks){
        tasklist.empty()

        for(task of tasks){
            console.log(task.status)
            if(task.status==false){
            let card=createTaskCardI(task)
            tasklist.append(card)
            }
            else{
            let card=createTaskCardC(task)
            tasklist.append(card)
            }
       

        }
        let pbtn=document.getElementsByClassName("btn btn-danger col col-sm-2")
        

        for(p of pbtn)
        {
        if(p.innerText=="low")
        {p.className="btn btn-success col col-sm-2"}
        
         }
    let dates=document.getElementsByClassName("due")
    for(p of dates)
    {
        p.innerText=p.innerText.slice(0,10)
    
     }


    })


   
})