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

  push(){
    //create new node
    const newNode = new Node(value)

    if(this.length === 0){
      this.first = newNode
    }

    newNode.next = this.first;
    this.first = newNode
    this.length ++;
    return this;
  }
}

//instance
let stack = new myStack(0)
stack.push(1)
stack.push(2)
console.log(stack)

//push
//create own node
//take first marker and point to newly created node