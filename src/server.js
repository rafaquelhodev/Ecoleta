const express = require("express")
const server = express()

// setting public folder
server.use(express.static("public"))

//using template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server, //which variable is the server
    noCache: true,
})

//home page
// req -> requisicao
// res -> resposta
server.get("/", (req, res) =>{
   return res.render("index.html")
})

server.get("/create-point", (req, res) =>{
    return res.render("create-point.html")
})

server.get("/search", (req, res) =>{
    return res.render("search-results.html")
})
//Start server
server.listen(3000)