<h2 align="center">
  <img src="https://sudhir-yadav.github.io/Chess-Robot/document/chero128.png" alt="Chero Logo" >
  <br/>
  CHESS ROBOT
</h1>
<p align="center">Automated Board Gaming</p>
<br/>

### About Project
The CHESS ROBOT began as a college project and is an IOT project showcasing the integration between web interface and physical mechanical devices. While the project is still being developed, the web portion is currently available as an open-source distribution.
### Project Glimpse
<p align="center"><img src="https://sudhir-yadav.github.io/Chess-Robot/document/demo.gif" alt="chess-coin-properties-individual-img" ></p>

### In General
A typical chess board comprises of 64 squares, labeled from A1 to H8. The movement of pieces on the board can be indicated by their corresponding square names. For instance, a pawn can move one step horizontally from A2 to A3. The chess board is made up of six different types of pieces: pawn, knight, queen, bishop, king, and rook. Each of these pieces moves differently, either in the same or in different directions. Their movements can be classified into three main categories: horizontal, vertical, and diagonal. Additionally, there is an extra move type called the L movement, which refers to the movement of the knight that involves two and a half steps.

### Setup 
Yet to be written .

### Game Data Structure and Algorithm
Game consist of 3 configuration array :
  - Chess coin properties ( coin name , initial position ,etc )
  - Chess rules 
  - Chess movement 
  - Direction of movement

#### Chess coin properties

![chess-coin-properties-all-img](https://sudhir-yadav.github.io/Chess-Robot/document/array_coin_properties.png)

The given array is comprised of two jagged arrays, where array[0] is for white pieces, and array[1] is for black pieces. Each of these arrays contains 16 elements, i.e., array[0/1][0] to array[1/0][15], representing the 16 pieces of each team. Each of these elements contains the properties of a piece as follows:

![chess-coin-properties-individual-img](https://sudhir-yadav.github.io/Chess-Robot/document/piece_coin_properties.png)

#### Chess Rules

![chess-rules-arr-img](https://sudhir-yadav.github.io/Chess-Robot/document/chess_movement.png)

### Steps of Algorithm

##### How it works

1) After chess moves from one square to another go to step 2
2) Then drop () function makes an array name piece_status and moves to step 3

![setting-prop-img](https://sudhir-yadav.github.io/Chess-Robot/document/setting_prop.png)

3) Piece_status is passed to getMovement() function which return an array of chess movement . Then go to step 4
4) Piece_status adn and output of getMovement() function is passed as parameter to checkRules() function. Which returns true or false after validation of rules . If returned param is true then go to step 5 else goto step 6 [checkRules(piece_status,getPieceMovement(piece_status))]
5) On true chess pieces is move to destination using  movePieces() function which takes 2 param as argument.after movement goto step 7.
	[movePieces(piece_drop_pos,chess_piece,piece_status);]
6) On false move is discarded.
7) movePieces() moves pieces to appropriate place and if needed makes pieces out of the game .If pieces do not replace each other go to step 9 else go to step 8
8) showOutPiece() is called and inactive pieces are shown in then seperate section . Then go to step 9
9) End
