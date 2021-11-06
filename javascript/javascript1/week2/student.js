// S M A R T - E A S E -  G L O B A L

//Student manager---<>-------<>-------<>---


const class07Students = [];

function addStudentToClass(studentName) {
   
let noOfStudent =class07Students.length;
console.log(noOfStudent)

if (class07Students.includes(studentName)){
    console.log('Student ' + studentName + ' is already in the class')
    return 'Student ' + studentName + ' is already in the class';
}
if (noOfStudent < 6 || studentName === 'Margrethe' ){
    class07Students.push(studentName);
} 
 else {
    console.log("Cannot add more students to class 07");
    return "Cannot add more students to class 07";
}


}

function getNumberOfStudents() {
  // You write code here
}

addStudentToClass('Funny');
addStudentToClass('Penny');
addStudentToClass('Meena');
addStudentToClass('Meena');
addStudentToClass('Many');
addStudentToClass('Veena');
addStudentToClass('Cina');
addStudentToClass('Margrethe');
console.log(class07Students);
