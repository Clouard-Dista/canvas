import { Coordinate } from "./coordinate"
export class Shape{
    coordinates: Coordinate[];
    constructor(coordinates:Coordinate[]){
        this.coordinates = coordinates
    }
    public toString(){
        let i = 0;
        let return_value = "{";
        return_value += "coordinates:[";
        for(let coordinate in this.coordinates){
            if(i != 0){
                return_value += ","
            }
            return_value += coordinate.toString()
            i += 1
        }
        return_value += "}";
        return  return_value;
    }
}