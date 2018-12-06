function Snake(board){
    this.speed = board.scale;
    this.tail = [],
    this.head,
    this.size = 0,
    this.xSpeed = this.speed,
    this.ySpeed = 0,
    this.x,
    this.y

    this.changeDirection = function(xSpeed, ySpeed){
        this.xSpeed = this.speed*xSpeed;
        this.ySpeed = this.speed*ySpeed;
        
    
    }
    this.setRandomStartPosition = function(board){
        this.x = floor(Math.random()*board.cols)*board.scale;
        this.y = floor(Math.random()*board.rows)*board.scale;
        
        this.tail[this.size] = {
            x : this.x,
            y : this.y
        };
    }
    this.checkBounds = function(board){
        if(this.xSpeed > 0 && this.x > board.cols*board.scale - 2*board.scale){
            print(this.x);
            this.x = -board.scale;
        } else if(this.xSpeed < 0 && this.x <= 1){
            this.x = board.cols*board.scale + board.scale;
        } else if(this.ySpeed > 0 && this.y > board.rows*board.scale - 2*board.scale){
            this.y = -board.scale;
        } else if (this.ySpeed < 0 && this.y < board.scale)
            this.y = board.rows*board.scale;
    }

    this.eat = function(prize){
        if(dist(this.x, this.y, prize.x, prize.y) === 0){
            let newPrize = Prize.generatePrize(this);
            prize.x = newPrize.x;
            prize.y = newPrize.y;
            this.size++;
            // // this.x+=this.xSpeed;
            // // this.y+=this.ySpeed;
            this.tail[this.size] = {x: this.x,
                        y: this.y};
            print(this.size + 1);
            
        }
    }

    this.move = function(board, prize){
        this.checkBounds(board);
        fill(255);
        
        this.eat(prize);
        //rect(this.tail[this.size].x, this.tail[this.size].y, gameWidth / board.cols, gameWidth / board.cols);
        for(let i=0; i<this.size; i++)
            this.tail[i] = this.tail[i+1];
       
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
        this.tail[this.size] = {x: this.x,
                        y: this.y};
        
        stroke(255);
        for(let i=0; i<=this.size; i++){
            if(i === this.size){
                fill(0, 100, 0);
            } else {
                fill(0, 200, 0);
            }
            rect(this.tail[i].x, this.tail[i].y, board.scale, board.scale);       
        }

        for(let i=0; i<this.size; i++){
            if(dist(this.x, this.y, this.tail[i].x, this.tail[i].y) < 2){
                this.tail=[];
                this.size = 0;
                this.tail[this.size] = {x : this.x,
                y: this.y};
            }
        }
            
        
    }
}