const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.use(express.json())

users=[
    {name:"renganathan",pass:1077},
    {name:"pandi",pass:12345}
]

app.post("/login",function(req,res)
{
    const username = req.body.username
    const password = Number(req.body.password)

    const user = users.find((u) => u.name === username && u.pass === password)
    
    if(user)
    {
        res.json(true)
    }
    else{
        res.json(false)
    }
})

app.post("/signin",function(req,res)
{
    const newusername = req.body.username
    const newpassword = Number(req.body.password)

    console.log(newusername,newpassword);
    

    const exists = users.find((u) => u.name === newusername && u.pass === newpassword)

    if(exists)
    {
        return res.json({success:false,message:"User already exists"})
    }
    else{
        users.push({name:newusername,pass:newpassword})
        console.log(users);
        res.json(true)
    }
    console.log(users);
    
})

app.listen(3000,function()
{
    console.log("port 3000,run successfully")
})