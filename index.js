
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/hello', function (req, res) {
    res.status(403).json({"msg":"hello everyone good morning"})
  })
  

app.listen(3000)

/* const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("have a nice day")
})
app.listen(4000) */