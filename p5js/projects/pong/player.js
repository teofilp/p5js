function Player(){

    this.x = 0;
    this.h = displayH / 4;
    this.y = floor((Math.random()*(displayH - 20 - this.h))+20);
    this.w = 20;
    this.key = {
        _pressed: {},
        
        isDown: function(keyCode){
            //console.log(keyCode + ": " + this._pressed[keyCode]);
            return this._pressed[keyCode];
        },

        onKeyDown: function(keyCode){
            this._pressed[keyCode] = true;
        },

        onKeyUp: function(keyCode){
            this._pressed[keyCode] = false;
        }

    },

    this.moveDown = () => {
        this.y = constrain(this.y + 10, 20,
            displayH - 20 - this.h);
    },

    this.moveUp = () => {
        this.y = constrain(this.y - 10, 20,
            displayH - 20 - this.h);
    }
}