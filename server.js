const express = require('express');
const path = require('path');
// Task 2.2 - import renderMessage() in server.js here
// Task 5.2 - import the 4 exported functions from vistors.js as modules here

// ------------------------------------------------------------ Task 1 START ------------------------------------------------------------------

// Task1: Import http module, create a server and make it listen on port: 8000 

 // Task 1.1 - import http module here


// Task 2.3 - import socket.io here

const app = express();

const server = http.createServer(app); // Task 1.2 - create server here

const io = socketio(server); //Task 2.4 - initialize socket io and make it directly accessible to server here
// ------------------------------------------------------------ Task 2 END ------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));
const announcer = 'Announcer';

// ------------------------------------------------------------ Task 3 START ------------------------------------------------------------------
//After there is a new connection to app, emit an event called 'sendText' with renderMessage() function as argument to newly connected user. renderMessage() should
//have a first parameter which is the const announcer and a second one which is string saying Welcome to UDE Museum! Please give your opinion on 
//this product and try to estimate its price. After there was a disconnection the same 'sendText' event should be emitted to all users but the renderMessage() function should 
// have the first parameter unchanged and the second parameter will be a string saying: A user has left the saloon. 

io.on('connection', socket => {

    //uncomment portion of code from line 32 to line 46 when you reach Task 5.4 and comment Tasks 3.1 and 3.2. 

    // socket.on('enterSaloon', ({username, room}) => {
    // const visitor = addVisitor(socket.id, username, room); 
    // // Task 5.4: add visitor to his desired room here

    // socket.emit('sendText', formatMessage(botName, 'Welcome to UDE Museum! Please give your opinion on this product and try to estimate its price.'));

    // //Task 5.5: broadcast when a user connects to a specfic saloon here

    // io.to(visitor.room).emit('saloonVsitors', {
    //     room: visitor.room,
    //     users: getSaloonVisitors(visitor.room)
    // });
    // });


         // Task 3.1 - emitting to the single newly connected user here

socket.on('sendMessage', msg => {
 const visitor = getVisitor(socket.id);
//Task 6.1 - Emitting back msg to all users in saloon
         });  
     } );

//Task 6.2: Uncomment line 66 to line 76 and save everything      
      
// ------------------------------------------------------------ Task 6 END ------------------------------------------------------------------




        // Task 3.2  - emitting to all users after one user disconnects here

    //     socket.on('disconnect', () => {
    //         const visitor = removeVisitor(socket.id);
    //         if (visitor) {
    //             io.to(visitor.room).emit('message', formatMessage(botName, `${visitor.username} has left the saloon`)); 
    //     io.to(visitor.room).emit('roomUsers', {
    //         room: visitor.room,
    //         users: getSaloonVisitors(visitor.room)
    //     });
    
    //         }
    // });
// ------------------------------------------------------------ Task 3 END ------------------------------------------------------------------













app.use(express.static(path.join(__dirname, 'public')));

const PORT = 8000 || process.env.PORT; // Task 1.3 - define port: 8000 for server here

server.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Task 1.4 - make server run on port here
// ------------------------------------------------------------ Task 1 END ------------------------------------------------------------------



