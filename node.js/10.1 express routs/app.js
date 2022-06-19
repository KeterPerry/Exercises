import express from "express";
import users from './users.js'
const app = express()
// app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());



app.listen(3000, ()=> {
   console.log("server is on");
})


app.get('/', (req, res)=>{    
    res.send(users.getAllUser())      ////res.send
})

app.post('/', (req, res)=>{    
    const {name, email} = req.body
    users.addUser({name, email})    
    res.json(users.getAllUser())    
    // res.send(users.addUser())      ////res.send
})

app.delete('/?id', (req, res)=>{
    const id = req.params.id  
    console.log(id); 
    users.deleteUser(id)    
    res.json(users.getAllUser())    
})


app.put('/:id', (req, res)=>{
    const {id} = req.params
    const {name, email} = req.body
    users.updateUser(id, name, email)    
    res.json(users.getAllUser())    
})







