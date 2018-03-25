/**
 * Author : Sudhir Yadav 
 * Date   : 25/10/2018
 * Desc   : Yet to completed 
 */
      var chess_pieces = [[{"id":"w1","type":"king","status":1,"init_pos":"E1","cur_pos":"E1","uni_code":"&#9818;"},{"id":"w2","type":"queen","status":1,"init_pos":"D1","cur_pos":"D1","uni_code":"&#9819;"},{"id":"w3","type":"rook","status":1,"init_pos":"A1","cur_pos":"A1","uni_code":"&#9820;"},{"id":"w4","type":"rook","status":1,"init_pos":"H1","cur_pos":"H1","uni_code":"&#9820;"},{"id":"w5","type":"bishop","status":1,"init_pos":"C1","cur_pos":"C1","uni_code":"&#9821;"},{"id":"w6","type":"bishop","status":1,"init_pos":"F1","cur_pos":"F1","uni_code":"&#9821;"},{"id":"w7","type":"knight","status":1,"init_pos":"B1","cur_pos":"B1","uni_code":"&#9822;"},{"id":"w8","type":"knight","status":1,"init_pos":"G1","cur_pos":"G1","uni_code":"&#9822;"},{"id":"w9","type":"pawn","status":1,"init_pos":"A2","cur_pos":"A2","uni_code":"&#9823;"},{"id":"w10","type":"pawn","status":1,"init_pos":"B2","cur_pos":"B2","uni_code":"&#9823;"},{"id":"w11","type":"pawn","status":1,"init_pos":"C2","cur_pos":"C2","uni_code":"&#9823;"},{"id":"w12","type":"pawn","status":1,"init_pos":"D2","cur_pos":"D2","uni_code":"&#9823;"},{"id":"w13","type":"pawn","status":1,"init_pos":"E2","cur_pos":"E2","uni_code":"&#9823;"},{"id":"w14","type":"pawn","status":1,"init_pos":"F2","cur_pos":"F2","uni_code":"&#9823;"},{"id":"w15","type":"pawn","status":1,"init_pos":"G2","cur_pos":"G2","uni_code":"&#9823;"},{"id":"w16","type":"pawn","status":1,"init_pos":"H2","cur_pos":"H2","uni_code":"&#9823;"}],[{"id":"b1","type":"king","status":1,"init_pos":"E8","cur_pos":"E8","uni_code":"&#9818;"},{"id":"b2","type":"queen","status":1,"init_pos":"D8","cur_pos":"D8","uni_code":"&#9819;"},{"id":"b3","type":"rook","status":1,"init_pos":"A8","cur_pos":"A8","uni_code":"&#9820;"},{"id":"b4","type":"rook","status":1,"init_pos":"H8","cur_pos":"H8","uni_code":"&#9820;"},{"id":"b5","type":"bishop","status":1,"init_pos":"C8","cur_pos":"C8","uni_code":"&#9821;"},{"id":"b6","type":"bishop","status":1,"init_pos":"F8","cur_pos":"F8","uni_code":"&#9821;"},{"id":"b7","type":"knight","status":1,"init_pos":"B8","cur_pos":"B8","uni_code":"&#9822;"},{"id":"b8","type":"knight","status":1,"init_pos":"G8","cur_pos":"G8","uni_code":"&#9822;"},{"id":"b9","type":"pawn","status":1,"init_pos":"A7","cur_pos":"A7","uni_code":"&#9823;"},{"id":"b10","type":"pawn","status":1,"init_pos":"B7","cur_pos":"B7","uni_code":"&#9823;"},{"id":"b11","type":"pawn","status":1,"init_pos":"C7","cur_pos":"C7","uni_code":"&#9823;"},{"id":"b12","type":"pawn","status":1,"init_pos":"D7","cur_pos":"D7","uni_code":"&#9823;"},{"id":"b13","type":"pawn","status":1,"init_pos":"E7","cur_pos":"E7","uni_code":"&#9823;"},{"id":"b14","type":"pawn","status":1,"init_pos":"F7","cur_pos":"F7","uni_code":"&#9823;"},{"id":"b15","type":"pawn","status":1,"init_pos":"G7","cur_pos":"G7","uni_code":"&#9823;"},{"id":"b16","type":"pawn","status":1,"init_pos":"H7","cur_pos":"H7","uni_code":"&#9823;"}]];
      var rules = {"rook":{"init_step":"a","step":"a","movement":"3","direction":"4","jump":"0"},"pawn":{"init_step":"2","step":"1","movement":"1","direction":"5","jump":"0"},"king":{"init_step":"1","step":"1","movement":"3","direction":"7","jump":"0"},"knight":{"init_step":"3","step":"3","movement":"3","direction":"6","jump":"1"},"bishop":{"init_step":"a","step":"a","movement":"3","direction":"3","jump":"0"},"queen":{"init_step":"a","step":"a","movement":"3","direction":"7","jump":"0"}};
      var black_out =  new Array()
      var white_out = new Array();
      var lock = 0 ;

      makeBoard();    // step 1
      place_pieces(); // step 2

      function makeBoard()
      {
        var table = "<table style='border:1px solid #dadada;margin:auto;' >";
        for(var i=8;i>0;i--)
        {
        table += "<tr>";
            for(var j=0;j<8;j++)
            {
            var clss = 'black_bg';
            var pieces_blk = "";
        
            if((j%2 && i%2) || (j%2 == 0 && i%2 == 0 )){ clss = 'white_bg'; }
            table += "<td  class='"+clss+"'><span class='box_label'>"+(String.fromCharCode(65+j))+i+"</span> <div class='placement_block' ondrop='drop(event)' ondragover='allowDrop(event)' data-value='["+j+","+i+"]'  id='"+(String.fromCharCode(65+j))+i+"'></div> </td>";
            }
        table += "</tr>";
        }
        table += "</table>";
        document.getElementById("drawTable").innerHTML = table;
      }

      function place_pieces()
      {
       // var rt ="<div class='chess_pieces' draggable='true'></div>";
         for(var i=0;i<chess_pieces.length;i++)
         {
            if(i == 0){ var piece_color = 'piece_white'; }else{ var piece_color = 'piece_black'; }
            for(var j=0;j<chess_pieces[i].length;j++)
            {
               document.getElementById(chess_pieces[i][j]['cur_pos']).innerHTML =  "<span piece_team='"+i+"' init_pos='"+chess_pieces[i][j]['init_pos']+"'  piece_type='"+chess_pieces[i][j]['type']+"' id='"+chess_pieces[i][j]['id']+"' class='chess_pieces "+piece_color+"' draggable='true' ondragstart='drag(event)' >"+chess_pieces[i][j]['uni_code']+"</span>";
            }
         }
      }

      function allowDrop(ev) 
      {
          ev.preventDefault();
         // $(".active_drag_point").removeClass('active_drag_point');
        //  $("#"+ev.target.id).addClass('active_drag_point');
      }

      function drag(ev) 
      {
          ev.dataTransfer.setData("chess_piece_id", ev.target.id);
          var drag_piece_id = document.getElementById(ev.target.id);
          ev.dataTransfer.setData("piece_from",drag_piece_id.parentNode.id);
          ev.dataTransfer.setData("piece_from_data",drag_piece_id.parentNode.getAttribute("data-value")); 
        //  $(".active_drag_point").removeClass('active_drag_point');
      }

      function drop(ev) 
      {
          ev.preventDefault();
          var drop_piece_id   = ev.dataTransfer.getData("chess_piece_id");
          var piece_last_pos  = ev.dataTransfer.getData("piece_from");
          var piece_last_pos_data = ev.dataTransfer.getData("piece_from_data");
          var piece_drop_pos  = ev.currentTarget;  //not to use target
          var piece_drop_pos_data = piece_drop_pos.getAttribute("data-value");

          if(piece_drop_pos.id != piece_last_pos)
          {
             var chess_piece     = document.getElementById(drop_piece_id);
             var piece_type      = chess_piece.getAttribute('piece_type');
             var piece_team      = chess_piece.getAttribute('piece_team');

            // console.log(chess_piece);
             
             var piece_status = {"chess_id":chess_piece.id,
                                 "init_pos":chess_piece.getAttribute('init_pos'),
                                 "last_pos_b":piece_last_pos,
                                 "curr_pos_b":piece_drop_pos.id,
                                 "piece_type":piece_type,
                                 "piece_team":piece_team,
                                 "last_pos":eval(piece_last_pos_data),
                                 "curr_pos":eval(piece_drop_pos_data)} ;
            
             //console.log(getPieceMovement(piece_status));
             if(checkRules(piece_status,getPieceMovement(piece_status)))
             {
               // piece_drop_pos.appendChild(chess_piece,piece_team,piece_type);
               //console.log(chess_pieces);
               movePieces(piece_drop_pos,chess_piece,piece_status);
             }

          }  
         // $(".active_drag_point").removeClass('active_drag_point');
      }

      function movePieces(piece_drop_pos,chess_piece,piece_status)
      {
        if(piece_drop_pos.childNodes[0] != undefined)
        {
            var outPieceTeam = piece_drop_pos.childNodes[0].getAttribute('piece_team'); // 
            var outPieceId = piece_drop_pos.childNodes[0].getAttribute('id'); // 

           // if(outPieceTeam == "1"){ black_out.push(chess_pieces[outPieceTeam][response1]); }
           // else{ white_out.push(chess_pieces[outPieceTeam][response1]); }
           
            for(var i=0;i< chess_pieces[outPieceTeam].length;i++)
            {
                if(chess_pieces[outPieceTeam][i]['id'] == outPieceId)
                {
                   // console.log(chess_pieces[outPieceTeam][i]['id']);
                    if(outPieceTeam == "1"){ black_out.push(chess_pieces[outPieceTeam][i]); }
                    else {  white_out.push(chess_pieces[outPieceTeam][i]); }
                    chess_pieces[outPieceTeam].splice(i,1);
                }
            }

            //chess_pieces[outPieceTeam].splice(response1,1); // remove one element
            piece_drop_pos.removeChild(piece_drop_pos.childNodes[0]);
            showOutPiece();
           // console.log(black_out);
        }
        piece_drop_pos.appendChild(chess_piece);
      }

      function showOutPiece()
      {
          document.getElementById('temp_black').innerHTML = "";
          document.getElementById('temp_white').innerHTML = "";

          for(var i=0;i<black_out.length;i++)
          {
            document.getElementById('temp_black').innerHTML = "<span class='out_piece_block piece_black' >"+black_out[i]['uni_code']+"</span>";
          }
          for(var i=0;i<white_out.length;i++)
          {
            document.getElementById('temp_white').innerHTML = "<span class='out_piece_block piece_white' >"+white_out[i]['uni_code']+"</span>";
          }
      }
      
      function getPieceMovement(piece_status)
      {
        var i_diff = piece_status.curr_pos[1] - piece_status.last_pos[1];
        var j_diff = Math.abs(piece_status.curr_pos[0] - piece_status.last_pos[0]);
        var movement,direction,step_count,jump = false;
        
        step_count = Math.abs(i_diff)+j_diff ;
        // [direction]->[1->vertical],[2->horizontal],[3->diagonal],[4->vertical_horizontal],[5->vertical_diagonal][6->l_movement][7->all]
        if((Math.abs(i_diff) > 0) && (Math.abs(i_diff) != j_diff) && !(j_diff > 0)){ direction = 1; }
        else if((j_diff > 0) && (Math.abs(i_diff) != j_diff) && !(Math.abs(i_diff) > 0)){ direction = 2; }
        else if((Math.abs(i_diff) > 0) && (Math.abs(i_diff) != j_diff) && (j_diff > 0) && (Math.abs(i_diff) != j_diff) && step_count > 2){direction = 6;}
        else if(Math.abs(i_diff) == j_diff){ direction = 3; step_count/=2; }
        
        // movement 1->forward , 2->backward
        if(piece_status.piece_team === "0"){ (i_diff > 0) ? movement = 1 : movement = 2; }//team white
        else{ (i_diff < 0) ? movement = 1 : movement = 2; }//team black

       // vertical _jump 
         if(direction == 1 || direction ==2){
             var arr_ele_pos
            if(direction == 1){ arr_ele_pos = 1 }else{ arr_ele_pos = 0 }
            var start,end;

            if((piece_status.last_pos[arr_ele_pos] < piece_status.curr_pos[arr_ele_pos]))
            {start = piece_status.last_pos[arr_ele_pos];end = piece_status.curr_pos[arr_ele_pos];} // white to black  - vforward
            else if((piece_status.last_pos[arr_ele_pos] > piece_status.curr_pos[arr_ele_pos]))
            {end = piece_status.last_pos[arr_ele_pos];start = piece_status.curr_pos[arr_ele_pos];} // black to white  - vbackward

            for(var i=start+1;i<end;i++)
            {  
               // console.log(i); 
                var sub = 0
                 if(direction == 2){var path_ele = document.getElementById(String.fromCharCode((65-sub) + i)+piece_status.curr_pos[1]).childNodes[0];}
                 else{var path_ele = document.getElementById(String.fromCharCode(65 + piece_status.curr_pos[0])+i).childNodes[0]; }
    
                if(path_ele != undefined){jump = true;break;}
            }
         }else if( direction == 3) // diagonal jump
         {
            var start1,end1,start2,end2; 

             if(piece_status.last_pos[0] < piece_status.curr_pos[0]){ start1 = piece_status.last_pos[0]; end1 =  piece_status.curr_pos[0]; } // white down -right - diagonal 
             else{ end1 = piece_status.last_pos[0]; start1 =  piece_status.curr_pos[0]; }

             if(piece_status.last_pos[1] > piece_status.curr_pos[1] ){ start2 = piece_status.last_pos[1]; end2 =  piece_status.curr_pos[1]; } // white down -right - diagonal 
             else{ end2 = piece_status.last_pos[1]; start2 =  piece_status.curr_pos[1]; }

             for(var i=start1+1;i<end1;i++)
             {
                while((j = start2-1) > end2)
                {
                  var path_ele = document.getElementById(String.fromCharCode(65 + i)+j).childNodes[0];
                  start2--;
                  break;
                }  
               if(path_ele != undefined){jump = true;break;}           
             }
         }else if(direction == 6){jump = true;}else{ jump = false; }

        var pieceMoveStatus = {'direction':direction,'movement':movement,'total_step':step_count,'jump':jump};
        return pieceMoveStatus;
      } // forward  , backward

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