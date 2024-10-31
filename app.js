const http = require('http');
const taskRoutes = require('./routes/taskRoutes');

const HOSTNAME= 'lacalhost'
const PORT=9000
 const server= hhtp.createserver((req ,res)=>{
    if (req.url.startswith('/tasks')) {
             taskRoutes(req,res) 
        
    } else{
        res.writeHead(404 , 'NOT FOUND' , {'contenttype' : 'application/json'})
        res.end(JSON.stringify({
            message: 'sorry. you get All lost!'
          }))
    }

 });

 server.listen(PORT,HOSTNAME,()=>{
    console.log('server running on port ${PORT}')
 })
