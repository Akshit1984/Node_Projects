const http=require('http')
const port =3000

const server =http.createServer(function(req,res){
    res.write("Hello World")
    res.end()
})

server.listen(port,function(error){
    if (error){
        console.log("SOmething went wrong")
    } else{
        console.log("Server is listening on port 3000")
    }
})