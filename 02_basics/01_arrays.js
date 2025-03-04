//Array

/*
1. JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
2. JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
3. JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
4. JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
*/ 

const myArr = [0, 1 , 2 , 3 , 4 , 5]
console.log(myArr);
const myHeroes = ["superman","perman"]
const myArr2 = new Array(1, 2 ,3 , 4)
console.log(myArr2[3]);


// Array Methods

//myArr.push(6)
//myArr.pop(6)
console.log(myArr);

myArr.unshift(9)
myArr.shift(9)

console.log(myArr);

