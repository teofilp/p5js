let canvas, board;
let current;
let next;
let stack = [];
let visitedCells = 1;
let mazeSolved = false;
let parentNode;
let path;
function setup() {
  
  frameRate(60);

  board = new Board(20, 15, 15);
  
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
  //print(board.cells);
}

function draw() {
  
  background(0);
  fill(0);
  
  fill(255);
  //rect(4*board.scale, 4*board.scale, board.scale, board.scale);
  if(!mazeSolved){
    fill(200, 0, 0);
    rect(current.x, current.y, board.scale, board.scale);
  }
  next = Cell.randomNeighbour(board.cells, current.i, current.j, board.rows, board.cols);
  if(next){
    removeWalls(current, next);
    next.visited = true;
    current = next;
    stack.push(current);
    visitedCells++;
  } else if(stack.length > 0){
    current = stack.pop();
  } else if(!mazeSolved){
    solveMaze();
    // fill(200);
    // rect(endPath.y, endPath.x, endPath.scale, endPath.scale);
    mazeSolved = true;
  } else {

    fill(200, 0, 0);
    rect(0, 0, board.scale, board.scale);
    showPath();
  }
  showCells();
}
function showCells(){
  for(let i=0; i<board.rows; i++)
    for(let j=0; j<board.cols; j++){
      board.cells[i][j].show();
  }
}

function removeWalls(current, next){
    if(current.i - next.i > 0){
      current.walls[0] = false;
      next.walls[2] = false;
    } else if(current.i - next.i < 0){
      current.walls[2] = false;
      next.walls[0] = false;
    } else if(current.j - next.j < 0){
      current.walls[1] = false;
      next.walls[3] = false;
    } else if(current.j - next.j > 0){
      current.walls[3] = false;
      next.walls[1] = false;
    }
}

function solveMaze(){
  let sourceNode = board.cells[0][0];

  let parents = [];
  let visitedNodes = [];
  for(let i=0; i<board.rows; i++){
    visitedNodes[i] = [];
    parents[i] = [];
    for(let j=0; j<board.cols; j++){
      visitedNodes[i][j] = false;
      parents[i][j] = [0, 0];
    }
  }
  parents[0][0] = [-1, -1];
  print(parents[0][0]);
  let contor = 0;
  let queue = [];
  queue.push(sourceNode);
  visitedNodes[sourceNode.i][sourceNode.j] = true;
  while(queue.length){
    sourceNode = queue.shift();
    contor++;
    //print(queue.length);
    print(sourceNode);
    let nodeNeighbours = Cell.neighbours(board.cells,
      sourceNode.i, sourceNode.j, board.rows, board.cols);
    //print(nodeNeighbours);
    for(let j=0; j<nodeNeighbours.length; j++){
      let newNode = board.cells[nodeNeighbours[j].i][nodeNeighbours[j].j];
      //print(newNode);
      if(visitedNodes[newNode.i][newNode.j] == false){
        
        visitedNodes[newNode.i][newNode.j] = true;
        parents[newNode.i][newNode.j] = [sourceNode.i, sourceNode.j];
        queue.push(newNode);
        
      }
    }
  }
  //print(visitedNodes[4][4], contor);
  parentNode = parents;
}

function showPath(){
  let endNode = parentNode[board.rows-1][board.cols-1];
  color = [];
  for(let i=0; i<board.rows; i++){
    color[i] = [];
    for(let j=0; j<board.cols; j++)
      color[i][j] = 0;
  }
  //print(endNode);
  color[board.rows-1][board.cols-1] = [200];
  while(endNode[0]!=-1){
    color[endNode[0]][endNode[1]] = 200;
    endNode = parentNode[endNode[0]][endNode[1]];
  }
  for(let i=0; i<board.rows; i++)
    for(let j=0; j<board.cols; j++){
      //print(color[i][j]);
      noStroke();
      fill(color[i][j]);
      rect(board.cells[i][j].x, board.cells[i][j].y, board.scale, board.scale);
    }
      
}



