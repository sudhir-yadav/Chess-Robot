
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset='utf-8'/>
	<title>Chero</title>
	<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
    <link href="css/font.css" rel="stylesheet" type="text/css"/>
	<link href="css/utility.css" rel="stylesheet" type="text/css"/>
    <link href="css/chess.css" rel="stylesheet" type="text/css"/>
   <script  type="text/javascript" src='js/jquery-3.3.1.min.js'></script>
  <style type="text/css">
       td{
       // border:1px solid #dadada;
        padding:20px;
        position: relative;
        width: 38px;
        height: 38px;
        outline: inset 2px #2b2b2b;
       }
       .white_bg{
        background:#ffffff;
        //color:#000000;
       }
       .black_bg{
        background:#2b2b2b;
       //    color:#ffffff;
       }
       .box_label{
                    background: white;
                    color: #000;
                    font-size: 10px;
                    border-radius: 9px;
                    border: 1px solid #dadada;
                    font-weight: 500;
                    float: left;
                    width: 24px;
                    display: inline-block;
                    position: absolute;
                    top: 5px;
                    left: 5px;
                 }
       button{
                    border-radius:20px;
                    background:#fff;
                    outline:none;
                    border:1px solid #dadada;
                    padding:10px;
                    margin:10px;
                    width:100px;
                    font-weight:500;
       }
       .console{
                  float: left;
                  width: 20%;
                  height: 100%;
                  /*border-radius: 8px;*/
                  text-align: left;
                  background: #252525;
                  padding: 10px;
                  min-height: 650px;
                  color: #22c422;
                  font-size:12px;
                  position: absolute;
                  top:0;
                  right: 0;
       }
       .chess_pieces{
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          line-height: 50px;
          text-align: center;
          /*font-size: 40px;*/
          font-size: 50px;
          line-height: 200%;
          z-index: 100;
       }
       .piece_white{
        color:#f9f8f8;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.98);
       }
       .piece_black{
        color:#000;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.98);
       }
       /*
       .chess_pieces{
                    width: 58px;
            height: 58px;
            position: absolute;
           // background: rgba(255,255,255,0.5);
            top: 15%;
            border-radius: 50px;
            left: 15%;
            line-height: 50px;
            text-align: center;
            border: 1px solid #dadada;
            font-size: 40px;
    line-height: 58px;
       }*/
       .chess_pieces:hover{
           cursor:pointer;
       }
       .placement_block{
        width:100%;
        height:100%;
        position: absolute;
        top:0;left:0;
       }


       [draggable] {
                    -moz-user-select: none;
                    -khtml-user-select: none;
                    -webkit-user-select: contain;
                    user-select: contain;
                    /* Required to make elements draggable in old WebKit */
                    -khtml-user-drag: element;
                    -webkit-user-drag: element;
                    cursor: move;
                    cursor:move; cursor:-webkit-grab; cursor:-moz-grab; cursor:grab;
                    }

.active_drag_point{
  box-shadow: inset 0 0 40px rgba(10, 255, 2, 0.9);
  background: rgba(255,255,255,0.5);
}

<?php


// put a variable named init status init=> 1/0 [Which would let us know if the piece is moved once or not]
    $chess_pieces = array(0=>array(
                                 0=>array('id'=>'w1','type'=>'king','status'=>1,'init_pos'=>'E1','cur_pos'=>'E1','uni_code'=>'&#9818;'),
                                 1=>array('id'=>'w2','type'=>'queen','status'=>1,'init_pos'=>'D1','cur_pos'=>'D1','uni_code'=>'&#9819;'),
                                 2=>array('id'=>'w3','type'=>'rook','status'=>1,'init_pos'=>'A1','cur_pos'=>'A1','uni_code'=>'&#9820;'),
                                 3=>array('id'=>'w4','type'=>'rook','status'=>1,'init_pos'=>'H1','cur_pos'=>'H1','uni_code'=>'&#9820;'),
                                 4=>array('id'=>'w5','type'=>'bishop','status'=>1,'init_pos'=>'C1','cur_pos'=>'C1','uni_code'=>'&#9821;'),
                                 5=>array('id'=>'w6','type'=>'bishop','status'=>1,'init_pos'=>'F1','cur_pos'=>'F1','uni_code'=>'&#9821;'),
                                 6=>array('id'=>'w7','type'=>'knight','status'=>1,'init_pos'=>'B1','cur_pos'=>'B1','uni_code'=>'&#9822;'),
                                 7=>array('id'=>'w8','type'=>'knight','status'=>1,'init_pos'=>'G1','cur_pos'=>'G1','uni_code'=>'&#9822;'),
                                 8=>array('id'=>'w9','type'=>'pawn','status'=>1,'init_pos'=>'A2','cur_pos'=>'A2','uni_code'=>'&#9823;'),
                                 9=>array('id'=>'w10','type'=>'pawn','status'=>1,'init_pos'=>'B2','cur_pos'=>'B2','uni_code'=>'&#9823;'),
                                 10=>array('id'=>'w11','type'=>'pawn','status'=>1,'init_pos'=>'C2','cur_pos'=>'C2','uni_code'=>'&#9823;'),
                                 11=>array('id'=>'w12','type'=>'pawn','status'=>1,'init_pos'=>'D2','cur_pos'=>'D2','uni_code'=>'&#9823;'),
                                 12=>array('id'=>'w13','type'=>'pawn','status'=>1,'init_pos'=>'E2','cur_pos'=>'E2','uni_code'=>'&#9823;'),
                                 13=>array('id'=>'w14','type'=>'pawn','status'=>1,'init_pos'=>'F2','cur_pos'=>'F2','uni_code'=>'&#9823;'),
                                 14=>array('id'=>'w15','type'=>'pawn','status'=>1,'init_pos'=>'G2','cur_pos'=>'G2','uni_code'=>'&#9823;'),
                                 15=>array('id'=>'w16','type'=>'pawn','status'=>1,'init_pos'=>'H2','cur_pos'=>'H2','uni_code'=>'&#9823;')
                                        ),
                          1=>array(
                                 0=>array('id'=>'b1','type'=>'king','status'=>1,'init_pos'=>'E8','cur_pos'=>'E8','uni_code'=>'&#9818;'),
                                 1=>array('id'=>'b2','type'=>'queen','status'=>1,'init_pos'=>'D8','cur_pos'=>'D8','uni_code'=>'&#9819;'),
                                 2=>array('id'=>'b3','type'=>'rook','status'=>1,'init_pos'=>'A8','cur_pos'=>'A8','uni_code'=>'&#9820;'),
                                 3=>array('id'=>'b4','type'=>'rook','status'=>1,'init_pos'=>'H8','cur_pos'=>'H8','uni_code'=>'&#9820;'),
                                 4=>array('id'=>'b5','type'=>'bishop','status'=>1,'init_pos'=>'C8','cur_pos'=>'C8','uni_code'=>'&#9821;'),
                                 5=>array('id'=>'b6','type'=>'bishop','status'=>1,'init_pos'=>'F8','cur_pos'=>'F8','uni_code'=>'&#9821;'),
                                 6=>array('id'=>'b7','type'=>'knight','status'=>1,'init_pos'=>'B8','cur_pos'=>'B8','uni_code'=>'&#9822;'),
                                 7=>array('id'=>'b8','type'=>'knight','status'=>1,'init_pos'=>'G8','cur_pos'=>'G8','uni_code'=>'&#9822;'),
                                 8=>array('id'=>'b9','type'=>'pawn','status'=>1,'init_pos'=>'A7','cur_pos'=>'A7','uni_code'=>'&#9823;'),
                                 9=>array('id'=>'b10','type'=>'pawn','status'=>1,'init_pos'=>'B7','cur_pos'=>'B7','uni_code'=>'&#9823;'),
                                 10=>array('id'=>'b11','type'=>'pawn','status'=>1,'init_pos'=>'C7','cur_pos'=>'C7','uni_code'=>'&#9823;'),
                                 11=>array('id'=>'b12','type'=>'pawn','status'=>1,'init_pos'=>'D7','cur_pos'=>'D7','uni_code'=>'&#9823;'),
                                 12=>array('id'=>'b13','type'=>'pawn','status'=>1,'init_pos'=>'E7','cur_pos'=>'E7','uni_code'=>'&#9823;'),
                                 13=>array('id'=>'b14','type'=>'pawn','status'=>1,'init_pos'=>'F7','cur_pos'=>'F7','uni_code'=>'&#9823;'),
                                 14=>array('id'=>'b15','type'=>'pawn','status'=>1,'init_pos'=>'G7','cur_pos'=>'G7','uni_code'=>'&#9823;'),
                                 15=>array('id'=>'b16','type'=>'pawn','status'=>1,'init_pos'=>'H7','cur_pos'=>'H7','uni_code'=>'&#9823;')
                                        ));
    
    //
    $rules = array( 'rook'   => array('init_step'=>'a' , 'step'=>'a' , 'movement'=> '3' ,'direction'=> '4' ,'jump'=> '0'),
                    'pawn'   => array('init_step'=>'2' , 'step'=>'1' , 'movement'=> '1' ,'direction'=> '5' ,'jump'=> '0'),
                    'king'   => array('init_step'=>'1' , 'step'=>'1' , 'movement'=> '3' ,'direction'=> '7' ,'jump'=> '0'),
                    'knight' => array('init_step'=>'3', 'step'=>'3', 'movement'=> '3' ,'direction'=> '6' ,'jump'=> '1'),
                    'bishop' => array('init_step'=>'a' , 'step'=>'a' , 'movement'=> '3' ,'direction'=> '3' ,'jump'=> '0'),
                    'queen'  => array('init_step'=>'a' , 'step'=>'a' , 'movement'=> '3' ,'direction'=> '7' ,'jump'=> '0'));

                    // [movement]-> [1->forward],[2->backward],[3->both]
                    // [direction]->[1->vertical],[2->horizontal],[3->diagonal],[4->vertical_horizontal],[5->vertical_diagonal][6->l_movement][7->all]

  
  
  
    // direction -> (forward,backward)(+,-)    [column]
    // movement  -> (horizontal,vertical)(+,-) [column,row]

   // move_forward  -> forw(1)|horizontal(1)
   // move_backward -> back(1)|horizontal(1)

 ?>

  </style>
</head>
<body>

    <div class="project_body">

      <!-- <aside class="side_menu_bar pr_base_black1">


          <div class="side_menu_bar_wrapper">
                <a >
                      <h1><i class="icon-speedometer"></i></h1>
                      <small>Dashboard</small>
                </a>
                <a >
                      <h1><i class="icon-note"></i></h1>
                      <small>Form</small>
                </a>
                <a class="active">
                      <h1><i class="icon-directions"></i></h1>
                      <small>Home</small>
                </a>
                <a>
                      <h1><i class="fa fa-cube"></i></h1>
                      <small>Home</small>
                </a>
                <a>
                      <h1><i class="icon-briefcase"></i></h1>
                      <small>Home</small>
                </a>
                  <a>
                      <h1><i class="icon-settings"></i></h1>
                      <small>Home</small>
                  </a>   
            </div>
        </aside> -->
 
      <header class="nav_header pr_base_blue">
          <span class='flt_lft' style="padding:0 15px 0 15px;display:inline-block;font-size:20px;">
            <i class="fa fa-cube"></i> &nbsp; CHERO.COM
          </span>
      </header>
    
      <aside class="side_menu_bar pr_base_black1">


            <!-- <div class="sbar_sub_menu" >
              <div class="side_menu_bar_wrapper" style="padding-top:50px;">
                      <span style="display: block; height: 30px; line-height: 30px; text-align: center; font-size: 18px; padding: 10px; /* border-bottom: 1px solid rgb(230, 225, 225); */ color: rgb(249, 254, 254); background: #68E34F;font-weight: 500;">
                      <i class="icon-directions"></i>&nbsp;  HOME 
                      </span>
                      <ol class="sbar_submenu_list">
                          <li><i class="icon-note"></i> &nbsp; Hello1  <i class="fa fa-angle-right pull-right"></i></li>
                          <li class="active" style="background: #f5f5f5;"><i class="icon-note"></i> &nbsp; Hello2 <i class="fa fa-angle-right pull-right"></i></li>
                          <li><i class="icon-note"></i> &nbsp; Hello <i class="fa fa-angle-right pull-right"></i></li>
                          <li><i class="icon-note"></i> &nbsp; Hello <i class="fa fa-angle-right pull-right"></i></li>
                      </ol>
                </div>
            </div> -->


          <div class="side_menu_bar_wrapper">
                <a >
                      <h1><i class="icon-speedometer"></i></h1>
                      <small>Dashboard</small>
                </a>
                <a >
                      <h1><i class="icon-note"></i></h1>
                      <small>Form</small>
                </a>
                <a class="active">
                      <h1><i class="icon-directions"></i></h1>
                      <small>Home</small>
                </a>
                <a>
                      <h1><i class="fa fa-cube"></i></h1>
                      <small>Home</small>
                </a>
                <a>
                      <h1><i class="icon-briefcase"></i></h1>
                      <small>Home</small>
                </a>
                  <a>
                      <h1><i class="icon-settings"></i></h1>
                      <small>Home</small>
                  </a>   
            </div>
        </aside>

      <section class="body_usable pad0 flt_lft" style="padding-left:0px;">

        <div class="txt_center area-lg-8 flt_lft" style="margin-top:30px;float:left;">
            <table style="border:1px solid #dadada;margin:auto;">
                <?php
                     for($i=8;$i>0;$i--)
                     {
                        echo "<tr>";
                         for($j=0;$j<8;$j++)
                         {
                            $class = 'black_bg';
                            $pieces_blk = "";

                            if(($j%2 && $i%2) || ($j%2 == 0 && $i%2 == 0 )){ $class = 'white_bg'; }
                            echo "<td  class='".$class."'><span class='box_label'>".chr(65+$j).$i."</span> <div class='placement_block' ondrop='drop(event)' ondragover='allowDrop(event)' data-value='[".$j.",".$i."]'  id='".chr(65+$j).$i."'></div> </td>";
                          }
                         echo "</tr>";
                     }
                ?>
            </table>
        </div>
        
        

      </section>

    </div>

    <!-- <div class="popup-bg ele-cntr">
      <div class="area-lg-3h  ele-cntr" style="background: #fff;height: 180px;margin-top: 10% !important;box-shadow: 5px 5px 40px 6px rgba(92, 91, 91, 0.16);border-radius: 2px;overflow: hidden;margin:auto;">
          <span style="padding: 10px;display: block;background: rgba(83, 179, 239, 0.99);color: #fff;"> WARNING <i class=""></i> </span>
      </div>
    </div> -->
 

     <script>   
   //  var m = "<div class='chess_pieces' draggable='true'>Pi</div>";
     var chess_pieces = <?php echo json_encode($chess_pieces); ?>;
     var rules = <?php echo json_encode($rules); ?>;
    // console.log("chess_pieces",chess_pieces);
    // console.log("rules",rules);
     place_pieces();

     function place_pieces()
     {
       // var rt ="<div class='chess_pieces' draggable='true'></div>";
         for(var i=0;i<chess_pieces.length;i++)
         {
            if(i == 0){ var piece_color = 'piece_white'; }else{ var piece_color = 'piece_black'; }
            for(var j=0;j<chess_pieces[i].length;j++)
            {
              $('#'+chess_pieces[i][j]['cur_pos']).html("<span piece_team='"+i+"' init_pos='"+chess_pieces[i][j]['init_pos']+"'  piece_type='"+chess_pieces[i][j]['type']+"' id='"+chess_pieces[i][j]['id']+"' class='chess_pieces "+piece_color+"' draggable='true' ondragstart='drag(event)' >"+chess_pieces[i][j]['uni_code']+"</span>");
            }
         }
     }

   </script>
   <script>
      function allowDrop(ev) 
      {
          ev.preventDefault();
          $(".active_drag_point").removeClass('active_drag_point');
          $("#"+ev.target.id).addClass('active_drag_point');
      }
      function drag(ev) 
      {
          ev.dataTransfer.setData("chess_piece_id", ev.target.id);
          var drag_piece_id = document.getElementById(ev.target.id);
          ev.dataTransfer.setData("piece_from",drag_piece_id.parentNode.id);
          ev.dataTransfer.setData("piece_from_data",drag_piece_id.parentNode.getAttribute("data-value")); 
          $(".active_drag_point").removeClass('active_drag_point');
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
                piece_drop_pos.appendChild(chess_piece,piece_team,piece_type);
             }

          }  
          $(".active_drag_point").removeClass('active_drag_point');
      }

      function getPieceMovement(piece_status)
      {
        var i_diff = piece_status.curr_pos[1] - piece_status.last_pos[1];
        var j_diff = Math.abs(piece_status.curr_pos[0] - piece_status.last_pos[0]);
        var movement,direction,step_count;
        
        step_count = Math.abs(i_diff)+j_diff ;
        // [direction]->[1->vertical],[2->horizontal],[3->diagonal],[4->vertical_horizontal],[5->vertical_diagonal][6->l_movement][7->all]
        if((Math.abs(i_diff) > 0) && (Math.abs(i_diff) != j_diff) && !(j_diff > 0)){ direction = 1; }
        else if((j_diff > 0) && (Math.abs(i_diff) != j_diff) && !(Math.abs(i_diff) > 0)){ direction = 2; }
        else if((Math.abs(i_diff) > 0) && (Math.abs(i_diff) != j_diff) && (j_diff > 0) && (Math.abs(i_diff) != j_diff) && step_count > 2){direction = 6;}
        else if(Math.abs(i_diff) == j_diff){ direction = 3; step_count/=2; }
        
        // movement 1->forward , 2->backward
        if(piece_status.piece_team === "0"){ (i_diff > 0) ? movement = 1 : movement = 2; }//team white
        else{ (i_diff < 0) ? movement = 1 : movement = 2; }//team black

        var pieceMoveStatus = {'direction':direction,'movement':movement,'total_step':step_count};
        return pieceMoveStatus;
      } // forward  , backward 
      
      function checkRules(piece_status,getPieceMovement)
      {
         var allow_mv = false,allow_dir = false,allwd_step = 0;
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
        //if(getPieceMovement.d)
        console.log(getPieceMovement);
        //console.log(same_team);
        
        if(piece_status.piece_type == "pawn" && getPieceMovement.direction == 3 &&  (curr_present_ele == undefined ||  same_team)  )
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
        }else
        {
            allow_dir = false;
        }

        // [movement]-> [1->forward],[2->backward],[3->both]
        if(getPieceMovement.movement == rules[piece_status.piece_type].movement || rules[piece_status.piece_type].movement == 3)
        {
          allow_mv = true;
        }

         
         
        if((allwd_step >= getPieceMovement.total_step || rules[piece_status.piece_type].step == "a") && allow_mv && allow_dir && !over_lay )
        {
            return true;
        }else{
            return false;
        }
         
      }

   

</script>
</body>
</html>