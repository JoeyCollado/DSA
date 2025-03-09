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

        if(this.length === 0){ //check length
           return undefined
        }

        //create temp variable
        let temp = this.tail

        if(this.length === 1){
            this.head = null
            this.tail = null
        }

        this.tail = this.tail.prev
        //break chain
        this.tail.next = null
        temp.prev = null
        this.length --;

        return temp
    }
    unshift(value){
        //create new node
        const newNode = new Node(value);
        //check length
        if(this.length === 0){
            this.head = newNode //point head to new node
            this.tail = newNode //point tail to new node
            
        }
        //else
        newNode.next = this.head //
        //
        this.head.prev = newNode //take the property of previous node and point it to new node
        this.head = newNode //point head to new node
        this.length ++
        return this;
    }
  
}
//unshift = add new value to the beggining of dbll 
//create new node
//take the pointer of said node and point to next node (former first element)
//take pointer of former first node to new node
//take head and point to new node

let mydbll = new DoublyLinkedList(0) //1st value
mydbll.push(1) //pushed value
mydbll.push(2) //pushed value
mydbll.push(3) //pushed value
mydbll.unshift(100);
console.log(mydbll)