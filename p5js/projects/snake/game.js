function Game(){
    this.isRunning = false,
    this.score = 0

    this.startGame = function(){
        this.isRunning = true;
        this.score = 0;
    }
}