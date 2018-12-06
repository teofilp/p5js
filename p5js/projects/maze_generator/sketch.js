let canvas, board;
let current;
let next;
let stack = [];
let visitedCells = 1;
function setup() {
  
  frameRate(60);

  board = new Board(20, 40, 40);
  
  let cells = [];

  for(let i = 0; i < board.rows; i++){
    cells[i] = [];
    for(let j = 0; j < board.cols; j++){

      cells[i][j] = new Cell(i, j, board.scale);
    }
  }
  board.cells = cells;
  
  canvas = createCanvas(board.cols*board.scale + 1, board.rows*board.scale + 1);
  canvas.parent("sketch_wrapper");
  
  current = board.cells[0][0];
  current.visited = true;
  print(board.cells);
}

function draw() {
  
  background(0);
  fill(0);
  showCells();
  fill(200, 0, 0);
  rect(current.y, current.x, board.scale, board.scale);
  next = Cell.neighbour(board.cells, current.i, current.j, board.rows, board.cols);
  if(next){
    removeWalls(current, next);
    next.visited = true;
    current = next;
    stack.push(current);
    visitedCells++;
  } else if(stack.length > 0){
    current = stack.pop();
  } else 
    current.x = current.y = 0;
    
}
function showCells(){
  for(let i=0; i<board.rows; i++)
    for(let j=0; j<board.cols; j++){
      board.cells[i][j].show();
  }
}

function removeWalls(current, next){
    if(current.i - next.i > 0){
      current.walls[3] = false;
      next.walls[1] = false;
    } else if(current.i - next.i < 0){
      current.walls[1] = false;
      next.walls[3] = false;
    } else if(current.j - next.j < 0){
      current.walls[2] = false;
      next.walls[0] = false;
    } else if(current.j - next.j > 0){
      current.walls[0] = false;
      next.walls[2] = false;
    }
}