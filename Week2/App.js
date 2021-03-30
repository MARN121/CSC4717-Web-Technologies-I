const http=require('http');

var dt=require('./myfirstmodule') // ./ is used to search module in same file

// Single line comment

/* 
For multiline comments
*/

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write("Hello, my name is "+ dt.GiveName() +"\n")
    res.write("Checking Date Module:  "+ dt.GiveDate() +"\n") // \n for next line
    res.end("WTF it worked? O.O")
}
).listen(8080, ()=>{
    console.log("It Worked FUCK YEAH! Port:8080")
})