const moment = require('moment');


function renderMessage(username, text) {
    return {
        username,
        text,
        time: moment().format('h:mm a')
    }
}
// ------------------------------------------------------------ Task 2 START -----------------------------------------------------------------------------
//Task 2: Export renderMessage function() from chat.js file and import it in server.js file. Import also socket.io in server.js, initialize it then
//make it directly accessible to server.
 //task 2.1 - Export renderMessage() function
