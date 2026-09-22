export interface Student{
    name:string;
    phoneNo:number;
    display():void;
}

export class School implements Student{
    name:string;
    phoneNo: number;
    constructor(name:string,phoneNo:number)
    {
        this.name=name;
        this.phoneNo=phoneNo;
    }
    display(): void {
        console.log(`${this.name} and his phone number is ${this.phoneNo}`);        
    }
}
