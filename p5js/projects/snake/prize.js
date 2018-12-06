function Prize(x, y){
    this.x = x,
    this.y = y

}
Prize.generatePrize = function(snake){
    let x, y;
    do{
        x = floor(Math.random()*board.cols)*board.scale;
        y = floor(Math.random()*board.rows)*board.scale;

    } while(!Prize.isGoodDistanceFromSnake(x, y, snake))
    
    return new Prize(x, y);
}
Prize.isGoodDistanceFromSnake = function(x, y, snake){
    let isGoodDistance = true;
    for(let i = 0; i<snake.size; i++){
        if(dist(snake.tail[i].x, snake.tail[i].y, x, y) < 2)
            isGoodDistance = false;
    }
    return isGoodDistance;
}