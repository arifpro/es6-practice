class Student{
    constructor(studID, studName){
        this.id = studID;
        this.name = studName;
        this.varsity = "SWFU";
    }
}

const student1 = new Student(12, "Arif");
const student2 = new Student(22, "Khan");
const student3 = new Student(29, "Pro");

// console.log(student1, student2);
// console.log(student1.name, student2.name);
console.log(student3);