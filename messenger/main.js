const socket = io.connect('http://localhost:3000');

socket.on('chatMessage', (message) => {
    displayMessage(message);
});

function displayMessage(message) {
    const messagesDiv = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    if (message.trim() !== '') {
        socket.emit('chatMessage', message);
        messageInput.value = '';
    }
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Send login data to the server using fetch API
    fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then((response) => response.json())
    .then((data) => {
        // Handle the login response from the server
        // For example, store the JWT token in local storage
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Send registration data to the server using fetch API
    fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then((response) => response.json())
    .then((data) => {
        // Handle the registration response from the server
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}