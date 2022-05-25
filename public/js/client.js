const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');

const roomName = document.getElementById('room-name');
const usersList = document.getElementById('users');
const {username, room} = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});

const socket = io();
// ------------------------------------------------------------ Task 4 START ------------------------------------------------------------------
//Task 4: Listen to emitted 'renderText' event and display the arguments(const announcer and the string) emitted in that event in the DOM. Use the help 
//of the outputMessage() function to display to DOM

// Task 4.1: listen to emitted event and use the outputMessage() function
 

//Task 4.2: Use string interpolation where you see '//' to respectively display profilePic, the username of message sender, the time the message was sent
//and the text that was sent in message 

// Task 5.3 - emit 'enterSaloon' event here 

socket.on('saloonVsitors', ({room, users}) => {
    var src = '';

if (room == 'Paints') {
    src = './images/monalisa.jpg';
}
else if (room == 'Valuable Objects') {
    src = './images/jewelry.jpg';
}
else if (room == 'Classic cars') {
    src = './images/classiccar.jpg';
}
const div = document.createElement('div');
div.classList.add('image-div');
div.innerHTML = `<img class="img" src= // alt="">`; //Task 5.6: use string interpolation to dsiplay the image where there is '//'
document.querySelector('.chat-messages').appendChild(div);

// ------------------------------------------------------------ Task 5 END ------------------------------------------------------------------

showSaloonName(room);
    showUsers(users);
});

function outputMessage(message) {
    const profilePic = './images/microphone.png';
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = 
    `<p class="meta">
        <img class="img2" src= ${profilePic} > 
        <b> ${text.username} </b> 
        <span> ${text.time} </span> 
    </p>

    <p class="text">
        ${text.text}
    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
}


socket.on('sendText', text => {
    outputMessage(text);
});







// ------------------------------------------------------------ Task 3 END ------------------------------------------------------------------
 

const newUser = {
    username,
    room
};

// ------------------------------------------------------------ Task 4 START ------------------------------------------------------------------

socket.emit('enterSaloon', newUser);


//Task 4 continues...


socket.on('saloonVisitors', ({room, users}) => {

showSaloonName(room);
showVisitors(users);
});



function showSaloonName(room) {
    roomName.innerText = room;
}

function showPicture(src) {
    const div = document.createElement('div');
    div.classList.add('image-div');
    div.innerHTML = `<img class="img" src= ${src} alt="">`;
    document.querySelector('.chat-messages').appendChild(div);
}

function showVisitors(visitors) {
    usersList.innerHTML = `
    ${visitors.map(visitor => `<li>${visitor.username}</li>`).join('')}
    `;
}

// ------------------------------------------------------------ Task 4 END ------------------------------------------------------------------


// ------------------------------------------------------------ Task 6 START ------------------------------------------------------------------
//Task 6: After a user sent a message(submitted form), emit that message to server with event 'sendMessage' and const msg as argument. Listen
//to that event on server side and emit it back to all visitors of a ssaloon, now with event 'sendText' and renderMessage() as argument. renderMessage()
//should have the sender username as first parameter and message text as second parameter.

chatForm.addEventListener('submit', (e) => {

    e.preventDefault(); 

    const message = e.target.elements.msg.value;

 // ------------------------------------------------------------ Task 5.1 START ------------------------------------------------------------------   
    socket.emit('sendMessage', message);

     // Task 6.1 - Emit const msg with event 'sendMessage' here. Const msg contains the message text sent by a user

    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});