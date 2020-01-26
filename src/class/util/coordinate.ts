export class Coordinate {
    x: Number;
    y: Number;

    constructor( x: Number, y: Number){
        this.x = x
        this.y = y
    }

    public toString(): string{
        return "{x:" + this.x + ",y:" + this.y + "}"
    }
}