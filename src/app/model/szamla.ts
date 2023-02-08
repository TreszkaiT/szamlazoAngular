export class Szamla{

    id: number
    billType: string
    receiptNumber: number       // Bizonylat szám
    receiptNumberUnique: number 
    currency: string
    partnerName: string
    paymentMode: string         // fizetési mód
    billDate: string              // számla kelte
    completionDate: string        // teljesítés dátuma
    paymentEnd: string            // fizetési határidő
    gorssAmount: number         // bruttó végösszeg
    balanced: boolean           // kiegyenlített
    workNumber1?: number         // munkaszám
    workNumber2?: number         // munkaszám
    workNumber3?: number         // munkaszám
    workNumber4?: number         // munkaszám
    workNumber5?: number         // munkaszám
    comment?: string             // megjegyzés
    attachment?: string          // csatolmány



    constructor(
            id: number = 0, 
            billType: string = "",
            receiptNumber: number = 0,
            receiptNumberUnique: number = 0, 
            currency: string = "", 
            partnerName: string = "",
            paymentMode: string = "",         // fizetési mód
            billDate: string = "",              // számla kelte
            completionDate: string = "",        // teljesítés dátuma
            paymentEnd: string = "",            // fizetési határidő
            gorssAmount: number = 0,         // bruttó végösszeg
            balanced: boolean = false,           // kiegyenlített
            workNumber1: number = 0,         // munkaszám
            workNumber2: number = 0,         // munkaszám
            workNumber3: number = 0,         // munkaszám
            workNumber4: number = 0,         // munkaszám
            workNumber5: number = 0,         // munkaszám
            comment: string = "",             // megjegyzés
            attachment: string = "",          // csatolmány
            
            ){
        this.id = id
        this.billType = billType
        this.receiptNumber = receiptNumber
        this.receiptNumberUnique = receiptNumberUnique 
        this.currency = currency 
        this.partnerName = partnerName
        this.paymentMode = paymentMode         // fizetési mód
        this.billDate = billDate              // számla kelte
        this.completionDate = completionDate        // teljesítés dátuma
        this.paymentEnd = paymentEnd            // fizetési határidő
        this.gorssAmount = gorssAmount         // bruttó végösszeg
        this.balanced = balanced            // kiegyenlített
        this.workNumber1 = workNumber1         // munkaszám
        this.workNumber2 = workNumber2         // munkaszám
        this.workNumber3 = workNumber3         // munkaszám
        this.workNumber4 = workNumber4         // munkaszám
        this.workNumber5 = workNumber5         // munkaszám
        this.comment = comment             // megjegyzés
        this.attachment = attachment          // csatolmány
        
    }

    fromObject(obj: any){
        for(let i in obj){
            this.id = obj.id
            this.billType = obj.billType
            this.receiptNumber = obj.receiptNumber
            this.receiptNumberUnique = obj.receiptNumberUnique 
            this.currency = obj.currency 
            this.partnerName = obj.partnerName
            this.paymentMode = obj.paymentMode         // fizetési mód
            this.billDate = obj.billDate              // számla kelte
            this.completionDate = obj.completionDate        // teljesítés dátuma
            this.paymentEnd = obj.paymentEnd            // fizetési határidő
            this.gorssAmount = obj.gorssAmount         // bruttó végösszeg
            this.balanced = obj.balanced            // kiegyenlített
            this.workNumber1 = obj.workNumber1         // munkaszám
            this.workNumber2 = obj.workNumber2         // munkaszám
            this.workNumber3 = obj.workNumber3         // munkaszám
            this.workNumber4 = obj.workNumber4         // munkaszám
            this.workNumber5 = obj.workNumber5         // munkaszám
            this.comment = obj.comment             // megjegyzés
            this.attachment = obj.attachment          // csatolmány
            
        }
    }
}