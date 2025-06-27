// map and chaining (by using multipple funtions together)

const myNumbers =[ 1 , 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const mynums = myNumbers.map( (num)=> num + 10)    // when we want any value then we put new variable
 const mynums =  myNumbers
                .map((num)=> num * 10)
                .map((num)=> num + 1)
                .filter((num)=> num >= 40)


console.log(mynums);
 