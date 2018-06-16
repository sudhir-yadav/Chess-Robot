# CHESS ROBOT

### About Project
Started as a college project. `CHESS ROBOT ` is an IOT project , which demonstrate interation between web interface and real mechanical devices.
Project is still under construction and only web part is currently shared as an open source distribution.
### Project Glimpse
![chess-coin-properties-individual-img](https://sudhir-yadav.github.io/chess-robot/document/Selection_051.png)

### In General
A general chess board consist of 64 square labeled from A1 to H8.So the movement on the board can also be addressed via square name. [For example a chess coin pawn moves one step horizontally from A2 -> A3] . Chess board consist of 6 different types of coins which are pawn,knight,queen,bishop,king and rook. Each of these coin move differently in same / different directions. These chess coin moves in 3 major directions which are horizontal,vertical and diagonal.There is one extra derived move named as L movement for our reference (i.e of knight which moves 2 and half step).

### Setup 
Yet to be written .

### Game Data Structure and Algorithm
Game consist of 3 configuration array :
  - Chess coin properties ( coin name , initial position ,etc )
  - Chess rules 
  - Chess movement 
  - Direction of movement

#### Chess coin properties

![chess-coin-properties-all-img](https://sudhir-yadav.github.io/chess-robot/document/array_coin_properties.png)

Above given array consist of two jagged array .Out of which array[0] is for white coins and array[1] is of black coin. Each of these array consist of 16 element that is array[0/1][0] to array[1/0][15] which represents 16 coins of each team. Each of these element consist of following properties of a coin.

![chess-coin-properties-individual-img](https://sudhir-yadav.github.io/chess-robot/document/piece_coin_properties.png)

#### Chess Rules

![chess-rules-arr-img](https://sudhir-yadav.github.io/chess-robot/document/chess_movement.png)

### Steps of Algorithm

##### How it works

1) After chess moves from one square to another go to step 2
2) Then drop () function makes an array name piece_status and moves to step 3

![setting-prop-img](https://sudhir-yadav.github.io/chess-robot/document/setting_prop.png)

3) Piece_status is passed to getMovement() function which return an array of chess movement . Then go to step 4
4) Piece_status adn and output of getMovement() function is passed as parameter to checkRules() function. Which returns true or false after validation of rules . If returned param is true then go to step 5 else goto step 6 [checkRules(piece_status,getPieceMovement(piece_status))]
5) On true chess pieces is move to destination using  movePieces() function which takes 2 param as argument.after movement goto step 7.
	[movePieces(piece_drop_pos,chess_piece,piece_status);]
6) On false move is discarded.
7) movePieces() moves pieces to appropriate place and if needed makes pieces out of the game .If pieces do not replace each other go to step 9 else go to step 8
8) showOutPiece() is called and inactive pieces are shown in then seperate section . Then go to step 9
9) End
