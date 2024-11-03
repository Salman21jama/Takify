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

        const image =files.image[0]


        const tasks= readTasksFromFile()
        const newTask={
            id: Date.now(),
            title: fields.title,
            description : fields.description,
            status: fields?.status || 'pending' ,
            image : image ? '/uploads/${image.newFilename}' : null,

        }
        tasks.push(newTask);
       
        console.log(files.image)
        writeTasksToFile(tasks);

        if(files.image){
            copyFileSync(image.filepath, path.join(__dirname,'../uploads' + image.newFilename ));
            res.end(JSON.stringify(newTask))
        }
    })

} 

exports.updateTask=(req ,res)=>{
    res.end(JSON.stringify({
         message:'not yet implemented'
    }))
}

exports.deleteTask=(req ,res)=>{
     res.end(JSON.stringify({
         message:'not yet implemented'
}))
}