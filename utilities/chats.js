const moment = require('moment');


function renderMessage(username, text) {
    return {
        username,
        text,
        time: moment().format('h:mm a')
    }
}


// ------------------------------------------------------------ Task 1 START ------------------------------------------------------------------

module.exports = renderMessage; 


//Task 1 continues...