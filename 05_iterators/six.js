const coding =  [ "js" , "cpp", "ruby" , "java", "python"]

const value = coding.forEach((item)=> {
    //console.log(item); 
    return item           // forEach loop donot return any value even we return that item but this loop donot returm anything (undefined)
})

//console.log(value);     

//* in case , we are just want to return the value or want to check its conditionally, so in all these cases we use filter map and return 
// filter map :- these also show callbackfn in it

const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// *  const numbers = myNums.filter((item)=>{
// *     console.log(item);
// *     return item            // its imp to return the item ,so that we get the item returmn in the output 
// *  })
// *   console.log(numbers)

// const numbers = myNums.filter( (num) => num > 4)    // by using condition in paranthesis, automattically return the value 
// console.log(numbers);


// const numbers = myNums.filter( (num) => {
//    return num > 4  // but this curly brasis/scope , its mandatary to use return keyword to get the return value in output 
//  }) 
// console.log(numbers);


// if we want to do the same work by using forEach loop

// const newNums = []
// myNums.forEach( (num)=> {
//     if (num > 4) {
//     newNums.push(num)
//     }
// })
// console.log(newNums);

const Books = [
    { Title : 'Book One' , Subject : 'fiction' , Publish : 1987,
      edition : 1999
    },
    { Title : 'Book two' , Subject : 'non-fiction' , Publish : 2009,
     edition : 2019
    },
    { Title : 'Book three' , Subject : 'science' , Publish : 1965,
      edition : 1988
    },
    { Title : 'Book four' , Subject : 'english' , Publish : 1935,
     edition : 1956
    },
    { 
      Title : 'Book five' , Subject : 'fiction' , Publish : 2002,
      edition : 2017      
    },
    { Title : 'Book six' , Subject : 'hindi' , Publish : 1897 ,
      edition : 1917
    },
    { Title : 'Book seven' , Subject : 'non-fiction' , Publish : 2004 ,
      edition : 2015
    },
    { Title : 'Book eight' , Subject : 'social science' , Publish : 2007 ,
     edition : 2016
    }
];
let userBooks = Books.filter((bk)=> bk.Subject === 'social science')
userBooks= Books.filter((bk)=>{
     return bk.Publish >= 1959  && bk.Subject === "fiction"
    })
console.log(userBooks);


