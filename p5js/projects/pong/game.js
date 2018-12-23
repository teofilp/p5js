function Game(){
    this.score = [0, 0];
    this.gameStatus = "Not Started";
    this.board = undefined;
    this.startGame = function(){
        gameStatus = "Playing";
    },
    this.initGame = function(board){
        this.board = board;
        this.gameStatus = "Initiated";
    
    }
}
