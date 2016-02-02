///*
var http = require('http');

http.createServer(function(request,response) {
	
	response.writeHead(200);
	response.write("This is Gooey\n");
	
	setTimeout(function(){
		
	
	response.end("Gooey has finished");
	
	},50);
	
	
}      ).listen(80);


console.log('listening on port 80');