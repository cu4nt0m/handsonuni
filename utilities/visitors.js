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


module.exports = { addVisitor, getSaloonVisitors, getVisitor, removeVisitor
};