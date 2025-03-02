//write a function that takes an array and chunk size as an input
//the function should return a new array when the original array
//is split into chunks of the specified size

//create an empty array to hold the chunks
//set a starting index to keep track of where we are in the original array
//loop through the original array as long as the index hasn't reached the end
//extract a chunk of the desired size from the original array
//add the extracted chunk to the chunked array
//move the index forward by the chunk size to get the next chunk
//return the final array of chunks

const chunk = (array, size) => {
  const chunked = []; //empty array
  let index = 0; //set a starting index

  while (index < array.length) {
    //loop through original array
    const chunk = array.slice(index, index + size); //extract a chunk

    console.log("-----------", chunk);
    chunked.push(chunk); //add extracted chunk to chunked array
    index += size; //move the index forward by the chunk size
  }

  return chunked; //return the final array of chunks
};

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
