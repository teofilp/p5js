function Board(){

    this.players = [new Player(38, 40), new Player(87, 83)];

    this.drawBoard = function (){
        fill(colors.board_lines.r,
             colors.board_lines.g,
             colors.board_lines.b);
        noStroke();
        rect(0, 0, displayW, 20);
        rect(0, displayH - 20, displayW, 20);
        rect(displayW / 2 - 10, 0, 20, displayH);
    },

    this.drawPaddles = function(){
        fill(colors.board_lines.r,
            colors.board_lines.g,
            colors.board_lines.b);

        noStroke();
        //console.log(this.players);
        rect(displayW - 50, this.players[0].y, this.players[0].w,
             this.players[0].h);
        rect(30, this.players[1].y, this.players[1].w, this.players[1].h);
    },

    this.updatePlayersCoordinates = function(){

        if(this.players[0].key.isDown(38))
            this.players[0].moveUp();
        else if(this.players[0].key.isDown(40))
            this.players[0].moveDown();
        
        if(this.players[1].key.isDown(87))
            this.players[1].moveUp();
        else if(this.players[1].key.isDown(83))
            this.players[1].moveDown();
    }       

}