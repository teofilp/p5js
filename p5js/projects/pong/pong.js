let canvas;
let displayW = window.innerWidth;
let displayH = window.innerHeight;
let paddles;
var game;

var colors = {
    board_lines: {
        r: 106,
        g: 8,
        b: 147
    }
}



function setup(){
    canvas = createCanvas(displayW, displayH);
    canvas.parent("#app");
    frameRate(30);
    let board = new Board();
    game = new Game();
    game.initGame(board);

    window.addEventListener("keydown", function(event){
        registerKey(event);
    }, false);

    window.addEventListener("keyup", function(event){
        unregisterKey(event);
    }, false);
    
}

function draw(){
    background(0);
    game.board.drawBoard();
    game.board.drawPaddles();
    game.board.updatePlayersCoordinates();
}

function registerKey(event){
    if(event.keyCode == 40)
        game.board.players[0].key.onKeyDown(40);
    else if(event.keyCode == 38)
        game.board.players[0].key.onKeyDown(38);
    else if(event.keyCode == 83)
        game.board.players[1].key.onKeyDown(83);
    else if(event.keyCode == 87)
        game.board.players[1].key.onKeyDown(87);
}

function unregisterKey(event){
    if(event.keyCode == 38)
        game.board.players[0].key.onKeyUp(38);
    else if(event.keyCode == 40)
        game.board.players[0].key.onKeyUp(40);
    else if(event.keyCode == 87)
        game.board.players[1].key.onKeyUp(87);
    else if(event.keyCode == 83)
        game.board.players[1].key.onKeyUp(83);
}

