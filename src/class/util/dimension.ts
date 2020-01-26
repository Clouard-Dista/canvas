export class Dimension {
    height: Number;
    width: Number;

    constructor(height: Number, width: Number){
        this.height = height;
        this.width = width;
    }

    public toString(){
        return "{height:" + this.height + ",width:" + this.width + "}"
    }
}