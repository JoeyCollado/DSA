
const fizzBuzz = n => {
    for(let i = 1; i < n; i++){ //iterate through a number of 1 to n
        if(i % 3 === 0 && i % 5 === 0){ //first condition (if i is divisible by 3 equals to 0 and is divisible by 5 equals to 0)
           console.log("FizzBuzz")
        }
        else if(i % 3 === 0){ //second (if i is divisible by 3 equals to 0)
           console.log("Fizz")
        }
        else if(i % 5 === 0){
            console.log("Buzz") //third condition (if i is divisible by 5 equals to 0)
        }
        else{ //default (just print the number)
            console.log(i) 
        }
    }
}

fizzBuzz(16)