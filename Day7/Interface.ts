interface Student{
    name:string;
    phoneNo:number;
    display():void;
}

class School implements Student{
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

let micheal=new School("micheal",9080252153);
micheal.display();


interface Student{
    name:string;
    phoneNo:number;
    display():void;
}

interface DeatilsStudent extends Student{
    aadhaar:number;
    casteCertificate:boolean;
}

let schoolDiary:DeatilsStudent={
    name:"Vaishak",
    phoneNo: 9080225518,
    aadhaar:939202829748,
    casteCertificate:false,
    display(): void {
        console.log(`${this.name} and his phone number is ${this.phoneNo} his aadhar number is ${this.aadhaar} does he have Caste certificate ${this.casteCertificate}`);        
    }
}

schoolDiary.display()

