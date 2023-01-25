let express = require("express");
let app = express();


var cors = require("cors")
let projectCollection;
let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoutes");

let http = require('http').createServer(app);
let io = require("socket.io")(http);

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extends: false}));
app.use(cors());
app.use('/api/projects', projectRoutes)

var port = process.env.port || 3000;

// socket test 
io.on('connection', (socket) => {
    console.log('User connected');
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
    setInterval(()=>{
      socket.emit('number', parseInt(Math.random()*10));
    }, 1000);
  
  });

http.listen(port, () =>{
    console.log("Listening on port: " + port)
    // createCollection("Australia")
})

