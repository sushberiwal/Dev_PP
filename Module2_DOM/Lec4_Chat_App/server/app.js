// express => express is a framework based on nodeJS
// nodemon => dev dependency => dependency which is only used during development not in production code
// socket.io => socket implemented

const express = require("express");
const { Server } = require("socket.io");
// server is created !!!
const app = express();
const http = require('http');
const server = http.createServer(app);

const io = new Server(server);

//app.use(express.json());
app.use(express.static("public"));

let userList = []; // for online list

// connection event is attached on io
io.on("connection" , function(socket){
    console.log(socket.id + " connected !!!");

    socket.on("userConnected" , function(username){
        let userObject = { id : socket.id , username : username};
        userList.push(userObject);
        console.log(userList);

        // for self
        socket.emit("online-list" , userList);

        // broadcast a message to all other clients except sender
        socket.broadcast.emit("join" , userObject);
    })

    socket.on("chat" , function(chatObj){
        socket.broadcast.emit("chatLeft" , chatObj);
    })

    socket.on("disconnect" , function(){
        let leftUserObj;
        let remainingUsers = userList.filter(function(userObj){
            if(userObj.id == socket.id){
                leftUserObj = userObj;
                return false;
            }
            return true;
        })
        userList = remainingUsers;
        socket.broadcast.emit("leave" , leftUserObj);
    })
})


// tcp port 5500
server.listen(5500 , function(){
    console.log("Server started at port 5500 !!!");
})