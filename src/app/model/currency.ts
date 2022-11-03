export class Currency {
    id: number
    shortName: string
    longName: string

    constructor(id: number = 0, shortName: string = "", longName: string = ""){
        this.id = id
        this.shortName = shortName
        this.longName = longName
    }

    fromObject(obj: any){
        for(let i in obj){
            this.id = obj.id
            this.shortName = obj.shortName
            this.longName = obj.longName
        }
    }
}