const http = require('http')
const fs = require('fs');
const path = require('path')



const options = {
	hostname: '127.0.0.1',
	port: 3000,
	path: '/',
	method: 'GET'
}

const express = require('express'),
	  app = express();
// const req = http.request(options, res => {
// 	console.log(`statusCode:${res.statusCode}`)

// 	res.on('data', d => {
// 		process.stdout.write(d)
// 	})
// })


// const server = http.createServer((req, res) => {
// 	// var url = req.url.endsWith('/')? req.url + "index.html" : req.url;
// 	var url = path.join(__dirname, "index.html")
// 	console.log(url)
// 	console.log(fs.existsSync(url)) 
// 	if(fs.existsSync(url))
// 		fs.readFile(url, (err, data) => {
// 			console.log(data)
// 			if(!err){
// 				res.writeHead(200, {"Content-Type": ""});
// 				res.end(data);
// 			}
// 		})
// 	})

app.get('/', (req, res) => {
	var url = path.join(__dirname, "public/index.html");
	if(fs.existsSync(url)){
		fs.readFile(url, (err, data) => {
			console.log("Loading game page.");
			if(!err){
				res.writeHead(200, {"Content-Type": ""});
				res.end(data);
			}
		})
	}
})

//MIDDLEWARE
app.use("/assets", express.static(__dirname + '/public'));
app.use("/", express.static(__dirname + '/public'));
// app.use("/style",express.static(__dirname + '/public/style'));
// app.use("/fonts",express.static(__dirname + '/public/fonts'));
// app.use("/img",express.static(__dirname + '/public/img'));
// app.use("/js",express.static(__dirname + '/public/js'));



const port = process.env.PORT||3000
app.listen(port, ()=>{
	console.log(`Server running at port ${port}`)
})