//doubly linkedlist = 

class Node{ //doubly linked list node
    //constructor
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

//doubly linked list class
class DoublyLinkedList{
    constructor(value){
      const newNdode =  new Node(value)
      this.head = newNdode //point head to new node
      this.tail = this.head //point tail to head
      this.length = 1; //set length
    }
}