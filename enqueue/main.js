//enqueue = add new element at the end

//create newly added element
//newly created element point to null
//take last pointer and point to newly created node

//create node

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

//create queue
class Queue{
   constructor(value){
    //create newnode
    const newNode = new Node(value);
    this.first = newNode
    this.last = newNode
    this.length = 1;
   }
}

let myQueue = new Queue(0) //zero initial value
console.log(myQueue)

