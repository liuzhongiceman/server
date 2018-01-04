var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;

// server1
function handleRequest1(request,response){
	response.end("You are doing great"+ request.url);
}

var server1 = http.createServer(handleRequest1);

server1.listen(PORT1, function(){
	console.log("server is working on PORT:"+PORT1);
})

// server2

function handleRequest2(request,response){
	response.end("You are doing bad"+ request.url);
}

var server2 = http.createServer(handleRequest2)

server2.listen(PORT2, function(){
	console.log("server is working on PORT:"+PORT2);
})