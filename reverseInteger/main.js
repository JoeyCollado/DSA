//convert number to string (toString method)
//convert string to array (split method)
//reverse the string (reverse method)
//convert array back to string (join method)
//convert string to number (parseInt method)
//return the number




const reverseInt = n => {
    const reversed = n.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(n)
};

console.log(reverseInt(-123))