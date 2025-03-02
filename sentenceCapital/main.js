//make the string lowercase (toLowerCase method)
//convert string to array (split method)
//capitalize each word (map method) = iteratre through array
//convert array back to string (join method)

const capital = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1)) //uppercase first character of the element 
    .join(" "); //then join it with the rest of the element
};

console.log(capital("hello world"))