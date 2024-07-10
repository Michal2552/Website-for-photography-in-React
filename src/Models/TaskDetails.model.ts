import { LineAndCharacter} from "typescript"


export enum OrderStatus {
    Pending = "בהזמנה",
    Active = "פעיל",
    Completed = "בוצע"
}

export enum TypeOfOrder{
    a = "סמאשקייק",
    b = "ניו בורן",
    c = "בת מצווה",
    d = "בר מצווה",
    e = "ילדים",
    f = "משפחה",
    g = "חלאקה",
    h = "גיל שנה",
    i = "אוכל",
    j = "עוגות וברים",
    k = "צילומי סטילס",
    l = "עבודות גרפיקה",
    m = "עיצובי אלבומים",
    n = "טבע",
    
}

export class TaskDetails{
    imageUrl!: string;
    theCustomerName!:string
    phone!:string
    email!:string
    theDateOfFilming!: Date;
    payment!:number
    orderStatus!:OrderStatus
    typeOfOrder!: TypeOfOrder;  

   constructor(imageUrl:string,theCustomerName:string,phone:string,email:string, theDateOfFilming: Date,payment:number
    ,orderStatus:OrderStatus, typeOfOrder: TypeOfOrder){
    this.imageUrl=imageUrl;
    this.theCustomerName=theCustomerName;
    this.phone=phone;
    this.email=email;
    this.theDateOfFilming  = theDateOfFilming;
    this.payment=payment;
    this.orderStatus=orderStatus;
    this.typeOfOrder = typeOfOrder;
}
}
