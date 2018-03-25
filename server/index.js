const io = require('socket.io');
const app = require('express').createServer();
const ioServer = io.listen('8000');
let clients = [];

ioServer.on('connection', function(socket) {
    console.info('New client connected (id=' + socket.id + ').');
    clients.push(socket);

    // When socket disconnects, remove it from the list:
    socket.on('disconnect', function() {
        const index = clients.indexOf(socket);
        if (index != -1) {
            clients.splice(index, 1);
            console.info('Client gone (id=' + socket.id + ').');
        }
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
    })
});

app.get('/', function (req, res) {
    console.log("hello");
});


function checkRules(piece_status,getPieceMovement)
{
   //console.log(getPieceMovement);
   var allow_mv = false,allow_dir = false,allwd_step = 0, lock_Status = false;
   (piece_status.init_pos == piece_status.last_pos_b) ? allwd_step = rules[piece_status.piece_type].init_step : allwd_step = rules[piece_status.piece_type].step; 
  
  var curr_present_ele =  document.getElementById(piece_status.curr_pos_b).children[0];
  var over_lay = false;
  var same_team = true;
  if(curr_present_ele !== undefined){
      var curr_piece_team = curr_present_ele.getAttribute('piece_team');
      if( piece_status.piece_team ==  curr_piece_team)
      {
          over_lay = true;
      }else
      {
          same_team = false;
      }
  }

  // [direction]->[1->vertical],[2->horizontal],[3->diagonal],[4->vertical_horizontal],[5->vertical_diagonal][6->l_movement][7->all]

  // breaked if into multiple parts

  if(rules[piece_status.piece_type].jump == "0" && getPieceMovement.jump == true )
   {
      allow_dir = false;
   }
   else if(piece_status.piece_type == "pawn" && getPieceMovement.direction == 3 &&  (curr_present_ele == undefined ||  same_team)  )
  {
      allow_dir = false;
  }
  else if(piece_status.piece_type == "pawn" && getPieceMovement.direction == 1 &&  !same_team )
   {
       allow_dir = false;
   }
  else if(( rules[piece_status.piece_type].direction == getPieceMovement.direction || (rules[piece_status.piece_type].direction == 7) &&  getPieceMovement.direction != 6))
  {
      allow_dir = true;
  }
  else if( (rules[piece_status.piece_type].direction == 4) && (getPieceMovement.direction == 1 ||  getPieceMovement.direction == 2) )
  {
      allow_dir = true;
  }
  else if( (rules[piece_status.piece_type].direction == 5) && (getPieceMovement.direction == 1 ||  getPieceMovement.direction == 3) )
  {
      allow_dir = true;
  }
  else if( (rules[piece_status.piece_type].direction == 5) && (getPieceMovement.direction == 1 ||  getPieceMovement.direction == 3) ){
      allow_dir = true;
  }
   else
  {
      allow_dir = false;
  }

  // [movement]-> [1->forward],[2->backward],[3->both]
  if(getPieceMovement.movement == rules[piece_status.piece_type].movement || rules[piece_status.piece_type].movement == 3)
  {
    allow_mv = true;
  }

  if(lock == 0 &&  piece_status.piece_team == 0 ){ lock = 1 ;lock_Status = true; }
  else if(lock == 1 &&  piece_status.piece_team == 1 ){ lock = 0;lock_Status = true; }
  else { lock_Status = false; }

  if((allwd_step >= getPieceMovement.total_step || rules[piece_status.piece_type].step == "a") && allow_mv && allow_dir && !over_lay && lock_Status )
  {
      return true;
  }else{
      return false;
  }


   
}
