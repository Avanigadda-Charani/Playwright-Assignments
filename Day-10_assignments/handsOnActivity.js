"use strict";
//Create a class named Student. 
class Student {
    //Add the studentName,course as properties: 
    studentName;
    course;
    //Create a parameterized constructor that accepts: studentName,course
    constructor(studentName, course) {
        //Initialize the properties using the this keyword.
        this.studentName = studentName;
        this.course = course;
    }
    //Create a method named displayDetails()
    displayDetails() {
        //print studentname and course
        console.log(`student name is ${this.studentName}`);
        console.log(`course name is ${this.course}`);
    }
}
//Create two student objects using the new keyword. 
let Student1 = new Student('Hari', 'Playwright with TypeScript');
let Student2 = new Student('Ram', 'Selenium with Java');
//calling methods using objects
Student1.displayDetails();
Student2.displayDetails();
