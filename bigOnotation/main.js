//how can we tell if the code we wrote is good code?


//interviewer might ask this question

//space complexity = how much memory it needs
//time complexity = how long an algorithm will take to run

//BigO = helps us understand how long an algorithm will take to run or how much
//       memory it will need as the amount of data it handles grows 

//imagine a giant mess we have to clean, Big o notation is like saying
//how the cleaning time grows as the mess gets bigger

//O of N or O(n) = signifies that the execution time of the algorithm grows linearly in proportion
//                 to the size of the input data

//as the number of items in the input data increases, the time it takes for the algorithm to
//run increases correspondingly

//example
//O(n)
const food = ["egg", "chicken", "milk", "juice", "pizza", "burger", "cake"] //array

const search = (item) => { //function
    for(let i = 0; i < food.length; i++){ //iterate over array
        if(food[i] === item){  //condition
            console.log(`found ${item}`); //consoe log
        }
    }
    for(let j = 0; j < food.length; i++){ //nested for loop 
        if(food[j] === item){
            console.log(`found ${item} 2`)
        }
    }
}

// n + n (for loop 1 + for loop 2)
// n + n = 2n -> O(2n)

//drop the constant so it becomes O(n) instead not O(2n)

search("cake");