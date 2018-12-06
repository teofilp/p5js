function Cell(i, j, scale){
    this.x = i*scale;
    this.y = j*scale;
    this.i = i;
    this.j = j;
    this.scale = scale;
    this.visited = false;
    this.walls = [true, true, true, true];

    this.show = function(){
        stroke(255);
        if(this.walls[0] === true){
            line(this.y, this.x, this.y, this.x + this.scale);
        }

        if(this.walls[1] === true){
            line(this.y, this.x + this.scale, this.y + this.scale, this.x + this.scale);
        }

        if(this.walls[2] === true){
            line(this.y + this.scale, this.x + this.scale, this.y + this.scale, this.x + this.scale);
        }

        if(this.walls[3] === true){
            line(this.y + this.scale, this.x, this.y, this.x);
        }
        fill(0);
        
    }

    
}

Cell.neighbour = function(cells, i, j, rows, cols){
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

   print(neighbours.length);
   let newCell = neighbours[floor(random()*(neighbours.length))];
   return newCell;
        
}
Cell.insideBounds = function(i, j, rows, cols){
    return (i>=0 && i<rows && j>=0 && j<cols);
}