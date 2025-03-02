// reverse word hello

//convert string to array (split method)
//reverse the array (reverse method)
//convert array back to string (join method)



const reverse = (str) =>  str.split("").reverse().join(); //convert string to array and reverse it then join it to return to string
console.log(reverse("hello"))
console.log(reverse("joey"))


//challenge 1 = palindromes = if the reverse string is equal to the original one then the word is a palindrome

const myReverse = (str2) => str.split("").reverse().join("") === str2; 
console.log("joey")
console.log("cddc")