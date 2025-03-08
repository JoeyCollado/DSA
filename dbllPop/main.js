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

        //push logic
        this.tail.next = newNdode // point tail to new node
        newNdode.prev = this.tail //point prev node to tail
        this.tail = newNdode //point tail to new node

        this.length++
        return this

    }

    pop(){
        
    }
}

//oop
//create temp variable
//point temp var to last linked list
//take tail and move that to prev element
//break chain of prev element and that element to remove it
//provide null value to prev element to make it last

let mydbll = new DoublyLinkedList(0) //1st value
mydbll.push(1) //pushed value
console.log(mydbll)