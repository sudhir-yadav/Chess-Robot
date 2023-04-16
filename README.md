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

1) Move the piece from one square to another.
2) Proceed to step 2.
3) The drop() function creates an array called piece_status and proceeds to step 3 to set the prop-img.
![setting-prop-img](https://sudhir-yadav.github.io/Chess-Robot/document/setting_prop.png)
4) The piece_status array is passed as a parameter to the getMovement() function, which returns an array of possible chess movements. Proceed to step 4.
5) The piece_status array and the output of the getMovement() function are passed as parameters to the checkRules() function. This function validates the rules and returns either true or false. If the returned parameter is true, proceed to step 5, else proceed to step 6. [checkRules(piece_status, getPieceMovement(piece_status))]
6) If the returned parameter is true, move the chess piece to the destination using the movePieces() function, which takes two parameters as arguments. After the movement, proceed to step 7. [movePieces(piece_drop_pos, chess_piece, piece_status);]
7) If the returned parameter is false, discard the move.
8) The movePieces() function moves the pieces to the appropriate place and, if necessary, removes pieces from the game. If the pieces do not replace each other, proceed to step 9, else proceed to step 8.
9) The showOutPiece() function is called, and the inactive pieces are displayed in a separate section. Proceed to step 9.
10) The process ends.


