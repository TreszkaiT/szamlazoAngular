export class Currency {
    id: number
    nameShort: string
    nameLong: string

    constructor(id: number = 0, nameShort: string = "", nameLong: string = ""){
        this.id = id
        this.nameShort = nameShort
        this.nameLong = nameLong
    }

    fromObject(obj: any){
        for(let i in obj){
            this.id = obj.id
            this.nameShort = obj.nameShort
            this.nameLong = obj.nameLong
        }
    }
}