function reverseString(str){
    //create empty stack
    const stack = []

    //iterate over string, and push each character to stack
    for(let char of str){
        stack.push(char)
    }
    //initialize an empty string
    let reverseStr = "";

    //pop each character from stack
    while(stack.length > 0){
        reverseStr += stack.pop();
    }

    return reverseStr;
}

const reverseString = reverseString("Hello World");
console.log(reverseString)