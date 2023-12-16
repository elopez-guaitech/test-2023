import express from 'express'
import cors from 'cors'
import db from './db/db.js'
import taskRouter from './routes/routes.js'

const app = express()
app.use(cors(
        {
                origin: '*'
        }
))
app.use(express.json())
app.use('/task', taskRouter)


try {
        await db.authenticate()
        console.log("Conexion a la bd exitosa")
} catch (error) {
        console.log(error)
}

app.get('/', (req, res) =>{
        res.send("RestApi Blog - thevoidloop")
})

app.listen(3000, ()=>{
        console.log('Server UP running in http://localhost:3000/')
})
