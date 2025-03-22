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

  push(value){
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
  pop(value){
    if(this.length === 0){
      return undefined;
    }

    let temp = this.first; //create temp var, should be pointing first node
    this.first = this.first.next //take first pointer and point it to next node
    this.first = null;

    temp.next = null //set first node to null to remove

    this.length--;
    return temp;
  }
}

//instance
let stack = new myStack(0)
stack.push(1)
stack.push(2)
stack.pop();
console.log(stack)

//create temp var, should be pointing first node
//take first pointer and point it to next node
//set first node to null to remove
