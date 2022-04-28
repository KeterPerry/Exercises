

const school = {
    teachers: [
      {
        id: 1,
        name: "Pinchas",
        subjects: ["chemistry", "biology", "physics"],
        students: [],
        capacityLeft: 3,
      },
      {
        id: 2,
        name: "Williams",
        subjects: ["history", "ethics"],
        students: [],
        capacityLeft: 2,
      },
    ],
    students: [
      {
        id: 10,
        name: "Jennifer",
        age: 20,
      },
      {
        id: 11,
        name: "Howard",
        age: 23,
      },
      {
        id: 12,
        name: "Old-Timmy",
        age: 86,
      },
      {
        id:13,
        name: "Houston",
        age: 21,
      },
    ],
  };


//   1. A method called “findPerson” that takes two arguments, 
// a type (either a student or teacher), and an id.
// It will return a particular object of that person


function findPerson (type, id){    ////checked

 
  
    let  obj={
    id: id,
    name: "Rami",
    subjects: ["chemistry", "biology", "English"],
    students: [],
    capacityLeft: 2,
    }
    
    return obj;

}

console.log(findPerson(school.teachers,3));


/////////////////////////////////////////
function assignStudent (id, subject){    ////checked

    const teacheravaild= school.teachers.find( e => e.capacityLeft>0 && e.subjects.includes(subject));
       
        if (teacheravaild===undefined)
        console.log ('Sorry, no available teachers left');
        else 
        return teacheravaild;


}

console.log(assignStudent(11,"history"));
/////////////////////////////////////////////




function assignTeachersSubject (id, subject){

 const teacher= school.teachers.find( e => e.id===id);


  if(!teacher.subjects.includes(subject))
      teacher.subjects.push(subject);

      return teacher;

}

console.log(assignTeachersSubject(1,"English"));


///////////////////////////////////////////////////

  function addPerson (school ,name, id, age){
    

    let  student=
    {
      id: id,
      name: name,
      age: age,
    }
    
  
  school.students.push(student);
  console.log(school);

}

console.log(addPerson (school,'Bar', 9, 22));


