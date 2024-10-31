const { getTasks, createTask, updateTask, deleteTask } = require("../controllers/taskcontroller");

 const taskRoutes= (req ,res )=>{
    if (req.method==='GET'){
        getTasks(req , res);
    } else if (req.metod=='POST'){
        createTask(req ,res)
    } else if (req.method ==='PATCH'){
        updateTask(req , res)
    } else if (req.nmethod ==='DELETE'){
        deleteTaskask(req , res)
    } else{
        res.writeHead(404 , 'Data not Found' , {'content-type' : 'application/json'})
        res.end(JSON.stringify({ 
            message :"Unknown method required"

        }))
    }
 }

 module.exports=taskRoutes;