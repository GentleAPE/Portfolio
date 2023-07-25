const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const authRoutes = require('./routes/auth');
const messagesRoutes = require('./routes/messages');

app.use(cors());
app.use(bodyParser.json());

// Socket.IO connection for real-time messaging
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chatMessage', (message) => {
    // Broadcast the message to all connected clients
    io.emit('chatMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/messages', messagesRoutes);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});