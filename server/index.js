const config    = require('./config'); 
const express   = require('express'); 
const appRouter = express.Router(); 
const app       = express();  
const Appserver = require('http').createServer(app);  
const ioServer  = require('socket.io')(Appserver);
let clients     = [];

Appserver.listen(config.port);  
app.get('/', function(req, res,next) {  res.sendFile('Express Server'); });

ioServer.on('connection', function (socket) {
    console.info('New client connected (id=' + socket.id + ').');
    clients.push(socket);
     // When socket disconnects, remove it from the list:
          socket.on('disconnect', function() {
              const index = clients.indexOf(socket);
              if (index != -1) {clients.splice(index, 1);console.info('Client gone (id=' + socket.id + ').');}
          });
          socket.on('message-from-client', (msg)=>{
              const index = clients.indexOf(socket);
              if (index > -1) {
                  /**
                  clients[socket].emit('message-from-server', 'text from SA');
                  **/
                  console.log('send mongo msg')
              } else {
                  console.log('send text message')
              }
          });
  });