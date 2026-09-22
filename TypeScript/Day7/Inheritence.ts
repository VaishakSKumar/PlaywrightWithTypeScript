class Student{
    name:string;
    id:number;
    emailId?:string;
    constructor(name:string,id:number,emailId?:string){
        this.name=name;
        this.id=id;
        this.emailId=emailId;
    }

    startTime(){
        console.log("Clas Starts");
        
    }

    stopTime(){
        console.log("Class Ends");
        
    }
}

class SchoolStudent extends Student{
    year?:number;
    constructor(name:string,id:number,emailId?:string,year?:number){
        super(name,id,emailId);
        this.year=year;
    }

     startTime(){
        console.log("Class Starts at 8.30A.M");
        
    }

    stopTime(){
        console.log("Class Ends at 5.00P.M");
        
    }

    display(){
        console.log(`${this.name} Roll no is ${this.id} and The Year is ${this.year}`)
    }
}

class CollegeStudent extends Student{
    year?:number;
    constructor(name:string,id:number,emailId?:string,year?:number){
        super(name,id,emailId);
        this.year=year;
    }

     startTime(){
        console.log("College Class Starts at 8.30A.M");
        
    }

    stopTime(){
        console.log("College Class Ends at 3.00P.M");
        
    }

    display(){
        console.log(`${this.name} Roll no is ${this.id} and The EmailId is ${this.emailId}`)
    }
}

let schoolStudent1=new SchoolStudent("Vaishak",31,"",2016);
let collegeStudent1=new CollegeStudent("Vaishak",162,"vaishakspostbox@gmail.com",);
schoolStudent1.display();
schoolStudent1.startTime();
schoolStudent1.stopTime();
collegeStudent1.startTime();
collegeStudent1.stopTime();
collegeStudent1.display();
let student1:Student=new CollegeStudent("Nivethaa",162,"nivethaamohan@gmail.com");
student1.startTime();
student1.stopTime();
//student1.display();//Property 'display' does not exist on type 'Student'.