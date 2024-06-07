const http=require('http')
const PORT =3000

const server =http.createServer(function(req,res){
    res.write("Hello World")
    res.end()
})

server.listen(PORT,function(error){
    if (error){
        console.log("SOmething went wrong")
    } else{
        console.log("Server is listening on port "+ PORT)
    }
})
