import { Wang } from "./wang"
export class Tile{
    walkable: Boolean;
    wang: Wang;
    
    constructor(walkable: Boolean, wang: Wang){
        this.walkable = walkable
        this.wang = wang
    }

    public toString(){
        return "{walkable:" + this.walkable + ",wang:" + this.wang + "}"
    }
}