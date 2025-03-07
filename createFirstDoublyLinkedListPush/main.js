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

    push(value){
        //create new node
        const newNdode = new Node(value)
        //check if ll is empty
        if(!this.head){ //if ll is not empty
            this.head = new Node //point to new node
            this.tail = new node //point to new node
        }

        

    }
}

//push
//create new dbll node
//pre node point to new dbll node
//get pointer of dbll to prev node
//point tail to new node
 