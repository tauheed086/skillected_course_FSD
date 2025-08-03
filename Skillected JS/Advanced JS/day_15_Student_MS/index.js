class student{
    constructor(name, roll, marks){
        this.name = name;
        this.roll = roll;
        this.marks = marks;
    }
    getDetails(){
        return `Name: ${this.name}, Roll: ${this.roll}, Marks: ${this.marks}`;
    }

    isPassed(){
        return this.marks >= 40;
    }
}
//Inheritance

class graduateStudent extends student{
    constructor(name,roll,marks,specialization){
        super(name,roll,marks);
        this.specialization = specialization;
    }

    getDetails(){
        return `Name: ${this.name}, Roll: ${this.roll}, Specialization: ${this.specialization}`;
    }
}

//Encapsulation
class StudentManager{
    constructor(){
        this.student = [];
    }
    addStudent(...student){
        this.student.push(...student);
    }

    listAll(){
        this.student.forEach((stu,index) => {
            console.log(`${index + 1}. ${stu.getDetails()} | passed: ${stu.isPassed()}`);
        });
}

     deleteStudent(roll){
        const before = this.student.length;
        this.student = this.student.filter(stu => stu.roll !== roll);
        const after = this.student.length;
        console.log(before === after ? "No student found with that roll number." : "Student deleted successfully.");
    }
}

   

//usage
let manager = new StudentManager();
const s1 = new student("John Doe", 101, 85);
const s2 = new graduateStudent("Johnny Doe", 102, 25, "civil");



manager.addStudent(s1,s2);
manager.deleteStudent(101);
manager.listAll();