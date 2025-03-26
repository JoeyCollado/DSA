

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

   enqueue(value){
    //create new node (1)
    const newNode = new Node(value)

    //check
    if(this.length === 0){
        this.first = newNode
        this.last = newNode
    }  
    //take last pointer and point to new node (2)
    this.last.next = newNode
    this.last = newNode 
    this.length ++
    return this
   }

   dequeue(){

    if(this.length === 0){
       return undefined
    }

    let temp = this.first 

    if(this.length === 1){
        this.first = null
        this.last = null
    }

    this.first = this.first.next // point pointer to next node (prev node) coz first in first out
    temp.next = null //remove last element 
    this.length--

    return temp;

  
   }
}

let myQueue = new Queue(0) //zero initial value
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.dequeue();
console.log(myQueue)

//dequeue = remove last element from queue

//take pointer from last element , point to prev one (null)
//