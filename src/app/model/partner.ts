export class Partner {
    id: number
    lastName: string
    firstName: string
    country: string
    zip: number
    city: string
    district: number            // kerület
    houseNumber: number
    houseBuilding: number
    houseStaircase: number          // lépcsőház
    houseFloor: number              // szint
    houseDoor: number
    bankAccNum1: number
    bankAccNum2: number
    bankAccNum3: number
    taxNum1: number
    taxNum2: number
    taxNum3: number
    contact1Name: string
    contact1Tel1: number
    contact1Tel2: number
    contact1Email: string
    contact2Name: string
    contact2Tel1: number
    contact2Tel2: number
    contact2Email: string

    constructor(
        id: number = 0,
        lastName: string = "",
        firstName: string = "",
        country: string = "",
        zip: number = 0,
        city: string = "",
        district: number = 0,  
        houseNumber: number = 0,
        houseBuilding: number = 0,
        houseStaircase: number = 0,  
        houseFloor: number = 0,   
        houseDoor: number = 0,
        bankAccNum1: number = 0,
        bankAccNum2: number = 0,
        bankAccNum3: number = 0,
        taxNum1: number = 0,
        taxNum2: number = 0,
        taxNum3: number = 0,
        contact1Name: string = "",
        contact1Tel1: number = 0,
        contact1Tel2: number = 0,
        contact1Email: string = "",
        contact2Name: string = "",
        contact2Tel1: number = 0,
        contact2Tel2: number = 0,
        contact2Email: string = ""
    ){
        this.id = id
        this.lastName = lastName
        this.firstName = firstName
        this.country = country
        this.zip = zip
        this.city = city
        this.district = district  
        this.houseNumber = houseNumber
        this.houseBuilding = houseBuilding
        this.houseStaircase = houseStaircase
        this.houseFloor = houseFloor
        this.houseDoor = houseDoor
        this.bankAccNum1 = bankAccNum1
        this.bankAccNum2 = bankAccNum2
        this.bankAccNum3 = bankAccNum3
        this.taxNum1 = taxNum1
        this.taxNum2 = taxNum2
        this.taxNum3 = taxNum3
        this.contact1Name = contact1Name
        this.contact1Tel1 = contact1Tel1
        this.contact1Tel2 = contact1Tel2
        this.contact1Email = contact1Email
        this.contact2Name = contact2Name
        this.contact2Tel1 = contact2Tel1
        this.contact2Tel2 = contact2Tel2
        this.contact2Email = contact2Email

    }

    fromObject(obj: any){
        for(let k in obj){
            this.id = obj.id
            this.lastName = obj.lastName
            this.firstName = obj.firstName
            this.country = obj.country
            this.zip = obj.zip
            this.city = obj.city
            this.district = obj.district  
            this.houseNumber = obj.houseNumber
            this.houseBuilding = obj.houseBuilding
            this.houseStaircase = obj.houseStaircase
            this.houseFloor = obj.houseFloor
            this.houseDoor = obj.houseDoor
            this.bankAccNum1 = obj.bankAccNum1
            this.bankAccNum2 = obj.bankAccNum2
            this.bankAccNum3 = obj.bankAccNum3
            this.taxNum1 = obj.taxNum1
            this.taxNum2 = obj.taxNum2
            this.taxNum3 = obj.taxNum3
            this.contact1Name = obj.contact1Name
            this.contact1Tel1 = obj.contact1Tel1
            this.contact1Tel2 = obj.contact1Tel2
            this.contact1Email = obj.contact1Email
            this.contact2Name = obj.contact2Name
            this.contact2Tel1 = obj.contact2Tel1
            this.contact2Tel2 = obj.contact2Tel2
            this.contact2Email = obj.contact2Email
        }
    }
}