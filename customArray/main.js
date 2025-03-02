class myArray {
  constructor() {
    this.length = 0;
    this.data = {}; //here we store our data
  }

  //custom algorithm

  //create push method
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  //get method
  get(index) {
    return this.data[index];
  }

  //pop method
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1]; //acceess last element
    this.length--; //delete element
    return lastItem;
  }
  //shift method
  shift() {
    const firstItem = this.data[0]; //access first element

    for (let i = 0; i < this.length; i++) {
      //iterate through array
      this.data[i] = this.data[i + 1]; //re index
    }

    //delete last element
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  //delete by index method
  deleteByIndex(index) {
   const item = this.data[index] //accessing data based on index

   for (let i = index; i < this.length - 1; i++) {
      //iterate through array
      this.data[i] = this.data[i + 1]; //re index

    }

    delete this.data[this.length - 1] //getting last element
    this.length--; //decrement length from the last element
    return item;
  }
}

const myNewArray = new myArray();
myNewArray.push("apple");
myNewArray.push("orange");
myNewArray.push("mango");
myNewArray.pop();

//
console.log(myNewArray);
console.log(myNewArray.shift());
console.log(myNewArray);
//
console.log(myNewArray.deleteByIndex(0));
