/*
{
value: 1,
next: null
}
*/


class Node {           //create a node
  constructor(value){
    this.value = value
    this.next = null 
  }
}

//create stack based on node

class myStack {
  constructor(value){
    //create own node
    const newNode = new Node(value)
    this.first = newNode
    this.length = 1;
  }
}

//instance
let stack = new myStack(0)
console.log(myStack)