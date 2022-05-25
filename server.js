const express = require('express');
const path = require('path');
const {addVisitor, getVisitor, removeVisitor, getSaloonVisitors} = require('./utilities/visitors');
const app = express();
// Task 1 continuing here...
const renderMessage = require('./utilities/chats'); 
const socketio = require('socket.io'); 
const http = require('http'); 
const server = http.createServer(app);

const io = socketio(server); 



app.use(express.static(path.join(__dirname, 'public')));
const announcer = 'Announcer';
const welcomeMessage = 'Welcome to UDE Museum! Please give your opinion on this product and try to estimate its price.';
const goodByeMsg = 'A user is gone';
const notify = 'has joined the saloon';


io.on('connection', socket => {


// Task 4 continuing here...
socket.on('enterSaloon', newUser => { 
    const visitor = addVisitor(socket.id, newUser.username, newUser.room);
    socket.join(visitor.room);

    socket.emit('sendText', renderMessage(announcer, welcomeMessage));
    socket.broadcast.to(newUser.room).emit('sendText', 
                 renderMessage(announcer, `${newUser.username}  ` + notify));
    io.to(visitor.room).emit('saloonVisitors', {
        room: visitor.room,
        users: getSaloonVisitors(visitor.room)
    });
});























// ------------------------------------------------------------ Task 2 START -----------------------------------------------------------------------------

// socket.emit('sendText', renderMessage(announcer, welcomeMessage)); 


// socket.on('disconnect', () => {
//     io.emit('sendText', renderMessage(announcer, goodByeMsg));
//    }); 










// ------------------------------------------------------------ Task 2 END ------------------------------------------------------------------


// ------------------------------------------------------------ Task 4 END -----------------------------------------------------------------------------


//Task 5.1 continuing here....
socket.on('‘sendMessage’', message => {
    const visitor = getVisitor(socket.id);
    io.to(visitor.room).emit('sendText', renderMessage(visitor.username, message)); 
    });


// ------------------------------------------------------------ Task 5.1 END -----------------------------------------------------------------------------

// ------------------------------------------------------------ Task 5.2 START -----------------------------------------------------------------------------



// ------------------------------------------------------------ Task 5.2 END -----------------------------------------------------------------------------



     // Section 1 START
      
        socket.on('disconnect', () => {
            const visitor = removeVisitor(socket.id);
            if (visitor) {
                io.to(visitor.room).emit('sendText', renderMessage(announcer, `${visitor.username} has left the saloon`)); 
        io.to(visitor.room).emit('roomUsers', {
            room: visitor.room,
            users: getSaloonVisitors(visitor.room)
        });
    
            }
    });

    // Section 1 END

 

     } );




// Task 1 continuing and ending here...

const PORT = 8000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// ------------------------------------------------------------ Task 1 END ------------------------------------------------------------------

