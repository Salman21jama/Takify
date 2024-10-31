const {IncomingForm}= require('formidable');
const { readTasksFromFile, writeTasksToFile } = require("../utils/fileHandler")
const {copyFileSync}=require('fs');

exports.getTasks= (req ,res)=>{
    const tasks= readTasksFromFile(); 
    res.writeHead(200 , {'content-type':'application/json'})
    res.end(JSON.stringify(tasks))
}

exports.createTask=(req , res)=>{ 
    const form= new IncomingForm();
    form.parse(req , (err , fields , files)=>{
        if(err){
            res.writeHead(404 , {'content-type' : 'application/json'});
            res.end(JSON.stringify({
                message:'error pasing form'
            }))
            return
        }
        const tasks= readTasksFromFile()
        const newTask={
            id: Date.now(),
            title: fields.title,
            description : fields.description,
            status: fields?.status || 'pending' ,
            image : fields.image ? '/uploads/${files.image.name}' : null,

        }
        tasks.push(newTask);

        writeTasksToFile(tasks);

        if(files.image){
            copyFileSync(files.image.path, path.join(__dirname,'../uploads' + files.image.name ))
            res.end(JSON.stringify(newTask))
        }
    })

} 

