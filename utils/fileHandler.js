const fs= require('fs');
const path =require('path');

const filepath= './data/tasks.json';
exports. writeTasksToFile=(tasks)=>{
    fs.writeFileSync(filepath , JSON.stringify(tasks))
}
exports. readTasksFromFile=()=>{
    if(!fs.existsSync(filepath)){
        writeTasksToFile({})
    }
    const data= fs.readFileSync(filepath);
    return JSON.parse(data)

} 
