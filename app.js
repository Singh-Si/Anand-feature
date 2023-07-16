const express = require("express");
require("./config/congig")
console.log("anand")
const app = express()

app.get("/",(req,res)=>{
    res.json("hell Anand")
})

app.listen(4040,()=>{
    console.log("server is started at prot 4040")
})