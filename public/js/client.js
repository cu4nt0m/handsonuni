const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');

const roomName = document.getElementById('room-name');
const usersList = document.getElementById('users');
const {username, room} = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});

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
div.innerHTML = `<img class="img" src= ${src} alt="">`;
document.querySelector('.chat-messages').appendChild(div);



const socket = io();


function outputMessage(text) {

// ------------------------------------------------------------ Task 3 START ------------------------------------------------------------------
    const profilePic = './images/microphone.png';
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = 
    `<p class="meta">
        <img class="img2" src= dash_1 > 
        <b> dash_2 </b> 
        <span> dash_3 </span> 
    </p>

    <p class="text">
        dash_4
    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight; 
}







// ------------------------------------------------------------ Task 3 END ------------------------------------------------------------------
 

const newUser = {
    username,
    room
};

// ------------------------------------------------------------ Task 4 START ------------------------------------------------------------------



//Task 4 continues...


socket.on('saloonVsitors', ({room, users}) => {

showSaloonName(room);
showUsers(users);
});



function showSaloonName(room) {
    roomName.innerText = room;
}



function showVisitors(visitors) {
    usersList.innerHTML = `
    ${visitors.map(visitor => `<li>${visitor.username}</li>`).join('')}
    `;
}




chatForm.addEventListener('submit', (e) => {

    e.preventDefault(); 

    const message = e.target.elements.msg.value;

 // ------------------------------------------------------------ Task 5.1 START ------------------------------------------------------------------   




 //Task 5.1 continues...
 
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});