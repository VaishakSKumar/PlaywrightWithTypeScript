class Student{
    readonly studentId:number;
    name:string;
    grade?:string;
    static schoolName:string="Green Wood Higher Secondary School";

    constructor(studentId:number,name:string,grade?:string){
        this.studentId=studentId;
        this.name=name;
        this.grade=grade;
    }

    getStudentDetails():void{
        console.log("Student ID:",this.studentId);
        console.log("Student Name:",this.name);
        if (this.grade!=undefined) {          
            console.log("Student grade:",this.grade);
        } else {
            console.log("Student Grade IS Not Mentioned");
        }

        console.log("Student School Name:",Student.schoolName);
    }

    static changeSchoolName(schoolName:string):void{
        Student.schoolName=schoolName;
        console.log("Changed Student School Name:",schoolName);
    }
}

let student1=new Student(151,"Vaishak","8th");
student1.getStudentDetails();
let student2=new Student(152,"Nivethaa");
student2.getStudentDetails();
Student.changeSchoolName("SunPark School");
console.log("After Changing School Name");
student1.getStudentDetails();
student2.getStudentDetails();