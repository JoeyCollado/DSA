//insert = first create new element
//         second figure where we want to place it (render)
//         third you have tp access the before element where we want to inser new element
//         fourth is to point it to the next node
//         last point before element to new element



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

  getLast(){
    if(!this.head){ //ask if element is the last element 
       return null
    }

    let temp = this.head //this will point to the first element until it get to the last element

    while(temp){ //if temp is equal to last return
      if(!temp.next){
        return temp
      }
       //if not keep searching
      temp = temp.next;
    }
  }

  get(index){
    let counter = 0

    let temp = this.head // start iteration from the first element

    while(temp){
      if(counter === index){ //if counter points to the right index return it
        return temp
      }
        //if not increment by 1
      counter++
      temp = temp.next
    }
    return null;
  }

  set(index, value){
    let temp = this.get(index);

    if(temp){
      temp.value = value


      return true
    }

    return false
  }

  insert(index, value){
    //check
    if(index === 0){
      return this.unshift(value)
    }
    
    if(index === this.length){
      return this.push(value)
    }

    //create new node
    const newNode = new Node(value)

    //get access to before element
    const temp = this.get(index - 1)

    //point new node to next node
    newNode.next = temp.next;

    //point before node to new node
    temp.next = newNode
    this.length ++
    return true

  }

  size(){
    let counter = 0; //first element
    let temp = this.head //count from first element


    while(temp){ //iterate over temp
      counter++
      temp = temp.next
    }

    return counter;
  }
}

//instance 
const myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
console.log(myLinkedList.set(3, 13))
console.log(myLinkedList.size())

//push = allow us to add a new node at the end of linkedlist
