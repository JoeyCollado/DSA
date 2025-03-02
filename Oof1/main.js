// O(1) = constant time 
//      = signifies that the execution time of an algorithm remains constant regardless of the input size

//imagine you have a box filled with items, and you know exactly where each item is located.
//to get specific item, you go directly to its location, taking the same amount of time,
//irrespective of how many items are in the box

//constant = O(1)

const numbers = [1,2,3,4,5];
// arr = [1,2,3,4,5] index = [specific location]
const getElement = (arr, index) => arr[index]
console.log(getElement(numbers,0)) //get element at index 0 which is 1
