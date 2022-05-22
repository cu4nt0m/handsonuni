const visitors = [];


function addVisitor(id, username, room) {
    const user = {id, username, room};

    visitors.push(user);

    return user;
}

function getVisitor(id) {
    return visitors.find(user => user.id === id);
}

function removeVisitor(id) {
    const _id = visitors.findIndex(user => user.id === id);

    if (_id !== -1) {
        return visitors.splice(_id, 1)[0];
    }
}


function getSaloonVisitors(room) {
    return visitors.filter(user => user.room === room);
}

// ------------------------------------------------------------ Task 5 START ------------------------------------------------------------------
//Task 5: Export addVisitor, getVisitor, getSaloonVisitors, removeVisitor and import them in server.js. Emit 'enterSaloon' event with const username  
//and room as arguments on client side(client.js file). Afetr listening to that event on server side(serer.js file)  add a visitor to his desired saloon
//after he/she connected and broadcast to other users of saloon event 'sendText', with string 'The user with username x has joined the saloon'. Display then 
//saloon pictures accordingly.

// Task 5.1 - export the 4 functions here