const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const Task = require("./models/Task")
const cors = require("cors")
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())
mongoose.connect("mongodb://localhost:27017/Task10DB", {useNewUrlParser:true, useUnifiedTopology: true})

app.get('/', (req, res)=>{
    const origin = {
        name: "Task10.1",
        word:"plz submit your Task"
    }
    res.send(origin)
})

app.post('/task', (req, res)=>{
    const task = new Task({
        task_type: req.body.task_type,
        tittle: req.body.task_tittle,
        description: req.body.task_description,
        surburb:req.body.task_suburb,
        date: req.body.task_date,
        budget_type: req.body.budget_type,
        budget_number: req.body.budget_number
    })
    task.save()
    .catch((err) => console.log(err))
    console.log(task)
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port, (req,res)=>{
    console.log("Server is running on port 5000")
})