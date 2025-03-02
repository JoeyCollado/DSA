//linkedlist = linear data structure where elements called nodes, are not stored
//             are not stored contiguously in memory. instead, each node contains
//             data and a reference, or link, to the next node in the sequence.

//nodes = have data and reference

//node
// { //just object with data
//     data: null,
//     next: null
// }

//creating linkedlist
//first node is called = head
//last node is called = tail
class Node {
  constructor(value) {
    this.head = value; //first element of the linked list
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value); //add new node

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode; //point tail to newly created node
    this.tail = newNode;
    this.length++;
  }

  pop() {

    if(!this.head){ //if we don't have any element
      return undefined
    }

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    //only 1 item
    if(this.length === 0){
        this.head = null;
        this.tail = null;
    }

    return temp;
  }

  unshift(value){
     //create new node
     const newNode = new Node(value)

     //check if we don't have any items inside linkedlist
     if(!this.head){
      this.head = newNode
      this.tail = newNode
     }

     //point newly created node to beggining
     newNode.next = this.head

     //point head to newly created element
     this.head = newNode

     this.length++
     return this;
  }

  shift(){
    if(!this.head){ //if linkedlist is empty
    return undefined;
    }
  //point the first node/element
  let temp = this.head
  //move the head to next node/element
  this.head = this.head.next
  //remove first element
  temp.next = null
  this.length--

  if(this.length ===0){
     this.tail = null
  }

  return temp
  }

  getFirst(){
    return this.head
  }
}

//instance 
const myLinkedList = new LinkedList(1);
myLinkedList.push(10);
myLinkedList.unshift(0);
myLinkedList.shift();
console.log(myLinkedList);
console.log(myLinkedList.getFirst())

//push = allow us to add a new node at the end of linkedlist
