function getTask(done){
    $.get('/todos/',function(data){
        done(data)

    })
}

function createTaskCardI(Task){
    return $(`   
    <div class="col-sm-10 card m-0 p-0" >
                    <div class="card-header m-0 row bg-danger text-white" >
                        <div class="col">${Task.task}</div>
                        <div class="col text-right due">${Task.due}</div>
                        <button style="font-size:10px"  class="btn-primary btn " data-toggle="modal" data-target="#myModal${Task.id}"> <i class="fa fa-edit"></i></button>
                           
                        <!-- The Modal -->
                                <div class="modal" id="myModal${Task.id}">
                                    <div class="modal-dialog">
                                    <div class="modal-content">
                                    
                                        <!-- Modal Header -->
                                        <div class="modal-header">
                                        <h4 class="modal-title">${Task.task}</h4>
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        
                                        <!-- Modal body -->
                                        <div class="modal-body">
                                        <div class="form-group">
                                                        <label>Enter the Due Date</label>
                                                        <input type="date" class="form-control" id="dueinmodal${Task.id}" value='${Task.due.slice(0,10)}'>
                                            </div>
                                                    <fieldset class="form-group">
                                                        <div class="row">
                                                        <legend class="col-form-label col-sm-4">Status</legend>
                                                        <div class="col-sm-4">
                                                            <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="statusinmodal${Task.id}" id="gridRadios1inmodal" value="incomplete" checked>
                                                            <label class="form-check-label" for="gridRadios1">
                                                                Incomplete
                                                            </label>
                                                            </div>
                                                            <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="statusinmodal${Task.id}" id="gridRadios2inmodal" value="complete">
                                                            <label class="form-check-label" for="gridRadios2">
                                                                Complete
                                                            </label>
                                                            </div>
                                                            
                                                        </div>
                                                        <br>
                                                        
                                                        <legend class="col-form-label col-sm-4 pt-0">Priority</legend>
                                                        <div class="col-sm-4 pr-10">
                                                        <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="gridRadios1inmodal${Task.id}" id="gridRadios1inmodal${Task.id}" value="low" checked>
                                                        <label class="form-check-label" for="gridRadios1">
                                                            Low
                                                        </label>
                                                        </div>
                                                        <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="gridRadios1inmodal${Task.id}" id="gridRadios2inmodal${Task.id}" value="medium">
                                                        <label class="form-check-label" for="gridRadios2">
                                                            Medium
                                                        </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="gridRadios1inmodal${Task.id}" id="gridRadios2inmodal${Task.id}" value="high">
                                                            <label class="form-check-label" for="gridRadios2">
                                                            High
                                                            </label>
                                                        </div>
                                                        </div>
                                                    </fieldset>
                                        
                                        
                                                    
                                                    
                                                        </div>
                                        
                                                        <!-- Modal footer -->
                                                        <div class="modal-footer">
                                                        <button type="button" class="btn btn-primary"  onclick="editClicked(${Task.id})" data-dismiss="modal">save changes</button>
                                                        </div>
                                                        
                                                    </div>
                                                    </div>
                                                </div>
                                
                                       </div>
                    <div class="card-body ">
                        <div class="row">
                            <div class="col">${Task.desc}</div>
                            <button class="btn btn-danger col col-sm-2 priority">${Task.priority}</button>
                           
                        </div>
                        <br>
                        <button type="button" id="notebutton${Task.id}" class="btn collapsible btn-primary" onclick="noteClicked(${Task.id})" display="block" >Notes</button>

                        <div class="row">
                            <div class="content">
                               <ul id="notelist${Task.id}"><li>notes 1</li></ul>
                               <input type="text" class="col-sm-10" display="inline " name="" id="noteinput${Task.id}">
                               <button class="btn btn-primary" onclick="addnote(${Task.id})">Add</button> 
                            </div>
                        </div>
`)
}
function createTaskCardC(Task){
    return $(`   
    <div class="col-sm-10 card m-0 p-0" >
                    <div class="card-header m-0 row bg-success text-white" >
                        <div class="col">${Task.task}</div>
                        <div class="col text-right due">${Task.due}</div>
                        <button style="font-size:10px" class="btn-primary btn " data-toggle="modal" data-target="#myModal${Task.id}"> <i class="fa fa-edit"></i></button>
                           
                        <!-- The Modal -->
                                <div class="modal" id="myModal${Task.id}">
                                    <div class="modal-dialog">
                                    <div class="modal-content">
                                    
                                        <!-- Modal Header -->
                                        <div class="modal-header">
                                        <h4 class="modal-title">${Task.task}</h4>
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        
                                        <!-- Modal body -->
                                        <div class="modal-body">
                                        <div class="form-group">
                                                        <label>Enter the Due Date</label>
                                                        <input type="date" class="form-control" id="dueinmodal${Task.id}" value='${Task.due.slice(0,10)}'>
                                            </div>
                                                    <fieldset class="form-group">
                                                        <div class="row">
                                                        <legend class="col-form-label col-sm-4">Status</legend>
                                                        <div class="col-sm-4">
                                                            <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="statusinmodal${Task.id}" id="gridRadios1inmodal${Task.id}" value="incomplete" checked>
                                                            <label class="form-check-label" for="gridRadios1">
                                                                Incomplete
                                                            </label>
                                                            </div>
                                                            <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="statusinmodal${Task.id}" id="gridRadios2inmodal${Task.id}" value="complete">
                                                            <label class="form-check-label" for="gridRadios2">
                                                                Complete
                                                            </label>
                                                            </div>
                                                            
                                                        </div>
                                                        <br>
                                                        
                                                        <legend class="col-form-label col-sm-4 pt-0">Priority</legend>
                                                        <div class="col-sm-4 pr-10">
                                                        <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="gridRadios1inmodal${Task.id}" id="gridRadios1inmodal${Task.id}" value="low" checked>
                                                        <label class="form-check-label" for="gridRadios1">
                                                            Low
                                                        </label>
                                                        </div>
                                                        <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="gridRadios1inmodal${Task.id}" id="gridRadios2inmodal${Task.id}" value="medium">
                                                        <label class="form-check-label" for="gridRadios2">
                                                            Medium
                                                        </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="gridRadios1inmodal${Task.id}" id="gridRadios2inmodal${Task.id}" value="high">
                                                            <label class="form-check-label" for="gridRadios2">
                                                            High
                                                            </label>
                                                        </div>
                                                        </div>
                                                    </fieldset>
                                        

                                                        </div>
                                        
                                                        <!-- Modal footer -->
                                                        <div class="modal-footer">
                                                        <button type="button" class="btn btn-primary"  onclick="editClicked(${Task.id})" data-dismiss="modal">save changes</button>
                                                        </div>
                                                        
                                                    </div>
                                                    </div>
                                                </div>
                                
                                       </div>     
                    <div class="card-body ">
                        <div class="row">
                            <div class="col">${Task.desc}</div>
                            <button class="btn btn-danger col col-sm-2 priority">${Task.priority}</button>
                           
                        </div>
                        <br>
                        <button type="button" id="notebutton${Task.id}" class="btn collapsible btn-primary" onclick="noteClicked(${Task.id})" display="block" >Notes</button>

                        <div class="row">
                            <div class="content">
                               <ul id="notelist${Task.id}"><li>notes 1</li></ul>
                               <input type="text" class="col-sm-10" display="inline " name="" id="noteinput${Task.id}">
                               <button class="btn btn-primary" onclick="addnote(${Task.id})">Add</button> 
                            </div>
                        </div>
`)
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
           refreshList()
           var form = document.getElementById("myForm");
            form.reset();
         window.alert("Added task to database")
        }
        )
}

function refreshList(){
    console.log("refreshing list")
    let tasklist=$('#tasklist')    

    getTask(function(tasks){
        tasklist.empty()
       // console.log("task   ------",tasks)

        for(task of tasks){
           
            if(task.status==false){
            let card=createTaskCardI(task)
            tasklist.append(card)
            }
            else{
            let card=createTaskCardC(task)
            tasklist.append(card)
            }
       

        }
        //--------------changng color of priority ------------------------
       priorityColor()
//------------------slicing due date--------------------------
        let dates=document.getElementsByClassName("due")
        for(p of dates)
        {
            p.innerText=p.innerText.slice(0,10)
        
        }
        //--------------------hiding notes-----------------
        let t=document.getElementsByClassName("btn collapsible btn-primary")
        for(btn of t){
           // console.log(btn)
            let content = btn.nextElementSibling     
            content.style.display = "none"
        }

    })


    
}


// ----------------functins for edit button-------------------
function editClicked(id){
    let taskdue=document.getElementById("dueinmodal"+id).value
    let query1="input[type='radio'][name='statusinmodal"+id+"']:checked"
    let query2="input[type='radio'][name='gridRadios1inmodal"+id+"']:checked"
    let status=$(query1).val()
    let priority=$(query2).val();  
   editTask(id,
            taskdue,
            status,
            priority,
            function(editedTask){
                           refreshList()
                           window.alert("edited task in database")
                        })
}
async function editTask(id,taskdue,status,priority,done){
    let editroute='todos/'+id
   
    const resp = await fetch(editroute, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({  due:taskdue, status:status, priority:priority })
    }).catch((err) => {
        console.error('err', err);
    })
    done(resp);
}   

// ----------------functins for notes button-------------------
function noteClicked(id){
    let t=document.getElementById("notebutton"+id)
    t.classList.toggle("active");
    let content = t.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    d(id)

}
function getNote(id,done){
    console.log(id)
    let newroute='/todos/'+id+'/notes'
    $.get(newroute,function(data){

        done(data)

    })
}

function d(id){
    let e=$('#notelist'+id) 
    getNote(id,(function(notes){

        var child = e.lastElementChild;          
            e.empty(); 
        
        for(note of notes){
            let n=document.createElement("li")
            n.appendChild(document.createTextNode(note.note));
            e.append(n)
        }

    }))
}

function notepost(id,note,done){
    let r='todos/'+id+'/notes'
    $.post(r,{
        note:note,
        todoId:id,
       },function (data){
            done(data)
        })

}

function addnote(id){
    let note=document.getElementById("noteinput"+id)
   // console.log(note.value,"is note to be added",id)
    notepost(
        id,
        note.value, function(addedTask){
            refreshList()            
          window.alert("Added note to database")
         })

}
//------------------------sorting----------------
function ReverseString(str) { 
    return str.split('').reverse().join('') 
 }
function sortbystatus(){
    console.log("sorting list by status")

    let tasklist=$('#tasklist')    

    getTask(function(tasks){
        tasklist.empty()
        tasks= tasks.sort(function (a, b) {
            
            return a.status - b.status;
          })

        for(task of tasks){
           
            if(task.status==false){
            let card=createTaskCardI(task)
            tasklist.append(card)
            }
            else{
            let card=createTaskCardC(task)
            tasklist.append(card)
            }
       

        }
        //--------------changng color of priority ------------------------
       priorityColor()
//------------------slicing due date--------------------------
        let dates=document.getElementsByClassName("due")
        for(p of dates)
        {
            p.innerText=p.innerText.slice(0,10)
        
        }
        //--------------------hiding notes-----------------
        let t=document.getElementsByClassName("btn collapsible btn-primary")
        for(btn of t){
           // console.log(btn)
            let content = btn.nextElementSibling     
            content.style.display = "none"
        }

    })


    
}

function sortbydue(){
    console.log("sorting list by date")

    let tasklist=$('#tasklist')    

   

    getTask(function(tasks){

        tasklist.empty()
        for(task of tasks){
            task.due=task.due.slice(0,10)
        }
        tasks= tasks.sort(function (a, b) {
            return a.due>b.due? 1 : -1;
          })

        for(task of tasks){
           
            if(task.status==false){
            let card=createTaskCardI(task)
            tasklist.append(card)
            }
            else{
            let card=createTaskCardC(task)
            tasklist.append(card)
            }
       

        }
        //--------------changng color of priority ------------------------
       priorityColor()
//------------------slicing due date--------------------------
        let dates=document.getElementsByClassName("due")
        for(p of dates)
        {
            p.innerText=p.innerText.slice(0,10)
        
        }
        //--------------------hiding notes-----------------
        let t=document.getElementsByClassName("btn collapsible btn-primary")
        for(btn of t){
           // console.log(btn)
            let content = btn.nextElementSibling     
            content.style.display = "none"
        }

    })


    
}

function sortbypriority(){
    console.log("sorting list by priority")

    let tasklist=$('#tasklist')  

    getTask(function(tasks){

        tasklist.empty()
        for(task of tasks){
            if(task.priority=="high")
           { task.priority="3"}
           if(task.priority=="medium")
           { task.priority="2"}
           if(task.priority=="low")
           { task.priority="1"}
        }
        tasks= tasks.sort(function (a, b) {
          
            return a.priority-b.priority;
          })
          tasks.reverse()

          for(task of tasks){
            if(task.priority=="3")
           { task.priority="high"}
           if(task.priority=="2")
           { task.priority="medium"}
           if(task.priority=="1")
           { task.priority="low"}
        }

        for(task of tasks){
           
            console.log(task.due)
            if(task.status==false){
            let card=createTaskCardI(task)
            tasklist.append(card)
            }
            else{
            let card=createTaskCardC(task)
            tasklist.append(card)
            }
       

        }
        //--------------changng color of priority ------------------------
       priorityColor()
//------------------slicing due date--------------------------
        let dates=document.getElementsByClassName("due")
        for(p of dates)
        {
            p.innerText=p.innerText.slice(0,10)
        
        }
        //--------------------hiding notes-----------------
        let t=document.getElementsByClassName("btn collapsible btn-primary")
        for(btn of t){
           // console.log(btn)
            let content = btn.nextElementSibling     
            content.style.display = "none"
        }

    })


    
}

function priorityColor(){

    let pbtn=document.getElementsByClassName("priority")           
  //  console.log(pbtn[0])
    for(p of pbtn)
    {    
    if(p.innerText=="low")
    {p.className="btn btn-success col col-sm-2 priority"}
    if(p.innerText=="medium")
    {p.className="btn btn-primary col col-sm-2 priority"}
    
     }
}


$(function(){
    
   
    // console.log("t===============",t[0])
   // sortbypriority()
   // sortbydue()
    refreshList()
    //function(){
    //     var i;
    //     for (i = 0; i < t.length; i++) { 
    //         console.log(t[i])     
    //     // let content = t[i].nextElementSibling     
    //     // content.style.display = "none"
    //     }
    // })

   

   

//    $('#notebutton').click()
//    $('#notebutton').click()

   
})