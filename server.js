const express = require('express');
const path = require('path');
const {addVisitor, getVisitor, removeVisitor, getSaloonVisitors} = require('./utilities/visitors');

// Task 1 continuing here...


const app = express();

app.use(express.static(path.join(__dirname, 'public')));
const announcer = 'Announcer';
const welcomeMessage = 'Welcome to UDE Museum! Please give your opinion on this product and try to estimate its price.';
const goodByeMsg = 'A user is gone';
const notify = 'has joined the saloon';


io.on('connection', socket => {


// Task 4 continuing here...























// ------------------------------------------------------------ Task 2 START -----------------------------------------------------------------------------














// ------------------------------------------------------------ Task 2 END ------------------------------------------------------------------


// ------------------------------------------------------------ Task 4 END -----------------------------------------------------------------------------


//Task 5.1 continuing here....



// ------------------------------------------------------------ Task 5.1 END -----------------------------------------------------------------------------

// ------------------------------------------------------------ Task 5.2 START -----------------------------------------------------------------------------



// ------------------------------------------------------------ Task 5.2 END -----------------------------------------------------------------------------



     // Section 1 START
      
    //     socket.on('disconnect', () => {
    //         const visitor = removeVisitor(socket.id);
    //         if (visitor) {
    //             io.to(visitor.room).emit('message', renderMessage(announcer, `${visitor.username} has left the saloon`)); 
    //     io.to(visitor.room).emit('roomUsers', {
    //         room: visitor.room,
    //         users: getSaloonVisitors(visitor.room)
    //     });
    
    //         }
    // });

    // Section 1 END

 

     } );




// Task 1 continuing and ending here...




// ------------------------------------------------------------ Task 1 END ------------------------------------------------------------------

