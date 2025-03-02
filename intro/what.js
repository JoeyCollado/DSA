//data structure = is a specific way of organizing, storing, and accessing data
//algorithm      = a set of instructions that tells computer how to do something
//               = step by step solution


//problem = create an array of students then create a function to iterate over the array and find specific student and log it out

//array
const listStudents = ["joey", "jake", "john", "james", "jared"]; //example of data structure 


//algorithm
function findStudent(allStudents, studentName){
    for(let i = 0; i < allStudents.length; i++){ //iterate over the array
        if(allStudents[i] === studentName){
            console.log(`You found ${studentName}`)
        }
    }
}

findStudent(listStudents, "joey")

