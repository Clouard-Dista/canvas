export class Entity{
    id: string;
    ori: Coordinate;
    colide: Shape;
    colideBox: Dimension;

    constructor(id: string,ori: Coordinate, colide: Shape, colideBox: Dimension){
        this.id = id
        this.ori = ori
        this.colide = colide
        this.colideBox = colideBox
    }

    public toString(): string {
        let return_value = "{"
        return_value += "id:" + this.id+","
        return_value += "origine:" + this.ori+","
        return_value += "colide:" + this.colide+","
        return_value += "colideBox:" + this.colideBox
        return return_value + "}"
    }
}