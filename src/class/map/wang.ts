export enum ZType{
    ZBase = "ZBase",
    ZSurface = "ZSurface",
}

export enum Part{
    Top = 0,
    TopLeft = 1,
    Left = 2,
    BottomLeft = 3,
    Bottom = 4,
    BottomRight = 5,
    Right = 6,
    TopRight = 7,
}

export class Wang{
    ZBase: String;
    ZSurface: String;
    constructor( zbase: String, zsurface: String){
        this.ZBase = zbase
        this.ZSurface = zsurface
    }

    public get(ztype: ZType, part: Part){
        return this[ztype][part.value] == 2
    }

    public toString(){
        return "{ZBase:" + this.ZBase + ",ZSurface:" + this.ZSurface + "}"
    }
}