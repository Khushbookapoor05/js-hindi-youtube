let myDate = new Date
// console.log(myDate);         // not understandable
// console.log(myDate.toString());     // gives in the string
// console.log(myDate.toDateString()); // perfect date or day
// console.log(myDate.toLocaleString()); //  perfect date or timing
// console.log(myDate.toISOString()); 
// console.log(myDate.toLocaleDateString());  //  only perfect date
// console.log(typeof myDate);                //  date is an object

// let myCreatedDate = new Date(2025,0 , 20)     // (year,month,date)
// console.log(myCreatedDate.toDateString());

//  let myCreatedDate = new Date(2025,0 , 20)
//  console.log(myCreatedDate.toLocaleString());

//  let myCreatedDate = new Date("2025-01-14")            // "YY-MM-DD"
//  console.log(myCreatedDate.toLocaleString());

 let myCreatedDate = new Date("01-14-2025")               // month-date-year
//  console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);   // it gives mili second value
// console.log(myCreatedDate.getTime());  // getTime gives mili second value from the given date 

/* to convert the date which is in milisecond value to second value*/
console.log(Date.now()/1000);   //but by doing this we receive the decimal value 
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getMonth()); // its result is 2 (march) because month starts from 0
console.log(newDate.getMonth() + 1); // by adding 1, it ignores the 0 or starts from 1
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"                               // to customize the date.toLocaleString
})






