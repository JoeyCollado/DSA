function reverseString(str){
    //create empty stack
    const stack = []

    //iterate over string, and push each character to stack
    for(let char of str){
        stack.push(char)
    }
    //initialize an empty string
    let reversedStr = "";

    //pop each character from stack
    while(stack.length > 0){
        reversedStr += stack.pop();
    }

    return reversedStr;
}

const reversedString = reverseString("Hello World");
console.log(reversedString)