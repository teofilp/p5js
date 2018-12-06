let game;
let board;
let gameWidth, gameHeight;
let snake;
let x = 0;
let y = 0;
let prize;
function setup() {
  
  
  (function(){
    frameRate(5);
    gameWidth = 600;
    gameHeight = 600;
    game = new Game();
    board = new Board(30, 30);
    
    snake = new Snake(board);
  })();
  createCanvas(board.cols*board.scale, board.rows*board.scale);
  snake.setRandomStartPosition(board);
  game.startGame();
  prize = Prize.generatePrize(snake);
}

function draw() {
  background(0);
  printPrize();
  snake.move(board, prize);
  
  //print(snake.size);
  
}
function printPrize(){
  stroke(255);
  fill(200, 0, 0);
  rect(prize.x, prize.y, board.scale, board.scale);

  //rect(0, board.rows*board.scale - board.scale, board.scale, board.scale);
}
function keyPressed(){
  if(keyCode === UP_ARROW && snake.ySpeed === 0){
    snake.changeDirection(0, -1);
  } else if(keyCode === DOWN_ARROW && snake.ySpeed === 0){
    snake.changeDirection(0, 1);
  } else if(keyCode === LEFT_ARROW && snake.xSpeed === 0){
    snake.changeDirection(-1, 0);
  } else if(keyCode === RIGHT_ARROW && snake.xSpeed === 0)
    snake.changeDirection(1, 0);
}