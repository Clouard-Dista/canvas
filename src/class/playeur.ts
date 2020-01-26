export class playeur {
    x: Number;
    y: Number;
    constructor(x:Number, y:Number){
        this.x = x;
        this.y = y;
    }
    public toString(): string {
        return this.x + ' ' + this.y;
    }
};