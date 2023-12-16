const express = require('express');
const cors = require('cors');
const app = express();

const port = '3000';
const taskRouter = require('./v1/routes/tasks.route');

app.use(express.json());
const whiteList = ['http://localhost:5173'];
const options = {
    origin:(origin, callback) => {
        if(whiteList.includes(origin) || !origin){
            callback(null, true);
        }else{
            callback(new Error('Problema de CORS'))
        }
    }
}
app.use(cors(options))
app.use('/api/v1', taskRouter);

app.listen(port, ()=>{
    console.log('Hola desde el puerto ' + port);
})