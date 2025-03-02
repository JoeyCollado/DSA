// O(n^2) = indicates that the algorithm execution time grows quadratically with the size of the input
//          data (represented by n)

function findPairs(arr){
    // O(n^2)
    for(let i = 0; i < arr.length; i++){         //this nested for loop represents = quadratic time or 0(n^2)
        for(let j = i + 1; j < arr.length; j++){
            console.log(`Pair ${arr[i]}, ${arr[j]}`);
        }
    }

    // O(n)
    for(let q = 0; q < arr.length; q++){
            console.log("---------", q)
    }
}

const numbers = [1,2,3,4,5];

findPairs(numbers);

// if we combine all the "O" operations it becomes O(n^2 + n)
// O(n^2) is a dominant term
// "n" is a non dominant term
// so we remove the non dominant term and we're only left with O(n^2)
// this way we simplify our bigO