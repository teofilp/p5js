function Cell(i, j, scale){
    this.x = i*scale;
    this.y = j*scale;
    this.i = i;
    this.j = j;
    this.scale = scale;
    this.visited = false;
    this.walls = [true, true, true, true];
    
    

    this.show = function(){
        stroke(100);
        if(this.walls[0] === true){
            line(this.x, this.y, this.x, this.y + this.scale);
        }

        if(this.walls[1] === true){
            line(this.x, this.y + this.scale, this.x + this.scale, this.y + this.scale);
        }

        if(this.walls[2] === true){
            line(this.x + this.scale, this.y, this.x + this.scale, this.y + this.scale);
        }

        if(this.walls[3] === true){
            line(this.x + this.scale, this.y, this.x, this.y);
        }
        fill(0);
        
    }

    
}

Cell.randomNeighbour = function(cells, i, j, rows, cols){
    let dl = [-1, 0, 1, 0];
    let dc = [0, 1, 0, -1];
    let neighbours = [];
    let size = 0;
    for(let dir = 0; dir<4; dir++){
        let lnou = i + dl[dir];
        let cnou = j + dc[dir];
        if(Cell.insideBounds(lnou, cnou, rows, cols))
            if(cells[lnou][cnou].visited === false)
                neighbours[size++] = cells[lnou][cnou];
    }

   //print(neighbours.length);
   let newCell = neighbours[floor(random()*(neighbours.length))];
   return newCell;
        
}

Cell.neighbours = function(cells, y, x, rows, cols){
    let top = {i: y-1, j: x};
    let right = {i: y, j: x+1};
    let bottom = {i: y+1, j: x};
    let left = {i: y, j: x-1};

    cellNeighbours = [];

    if(Cell.insideBounds(top.i, top.j, rows, cols) && !cells[y][x].walls[0])
        cellNeighbours.push(top);
    if(Cell.insideBounds(right.i, right.j, rows, cols) && !cells[y][x].walls[1])
        cellNeighbours.push(right);
    if(Cell.insideBounds(bottom.i, bottom.j, rows, cols) && !cells[y][x].walls[2])
        cellNeighbours.push(bottom);
    if(Cell.insideBounds(left.i, left.j, rows, cols) && !cells[y][x].walls[3])
        cellNeighbours.push(left);

    // for(let i=0; i<cellNeighbours.length; i++){
    //     fill(200);
    //     rect(cellNeighbours[i].y*20, cellNeighbours[i].x*20, 20, 20);
    // }
    print(cellNeighbours); 
    return cellNeighbours;
        
}

Cell.insideBounds = function(i, j, rows, cols){
    return (i>=0 && i<rows && j>=0 && j<cols);
}
