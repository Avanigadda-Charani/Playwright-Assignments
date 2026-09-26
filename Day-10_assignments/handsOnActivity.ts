//Create a class named Student. 
class Student {
    //Add the studentName,course as properties: 
    studentName: string;
    course: string;
    //Create a parameterized constructor that accepts: studentName,course
    constructor(studentName: string, course: string) {
        //Initialize the properties using the this keyword.
        this.studentName = studentName
        this.course = course
    }
    //Create a method named displayDetails()
    displayDetails() {
        //print studentname and course
        console.log(`student name is ${this.studentName}`);
        console.log(`course name is ${this.course}`);
    }

}
//Create two student objects using the new keyword. 
let student1 = new Student('Hari', 'Playwright with TypeScript')
let student2 = new Student('Ram', 'Selenium with Java')
//calling methods using objects
student1.displayDetails()
student2.displayDetails()
