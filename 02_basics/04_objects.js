//const tinderUser  = new Object()   // singelton object 
const tinderUser ={}   // non singelton object

tinderUser.id="abc123"
tinderUser.name="hitesh"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email :"hitesh@gmail.com",
    Fullname: {
        username : {
        firstname : "hitesh",
        lastname : "chodhary",
      }
    }
} 
console.log(regularUser.Fullname.username);
console.log(regularUser.Fullname?.username); // we see this case later
  
/* for combining the object items together in an object */

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
const obj3 = {5: "e" , 6: "f"}

//const obj4 = { obj1 , obj2 , obj3}
//const obj4 = Object.assign({}, obj1 , obj2 , obj3) 
/* object.assign(target ,source) but if we have more than two source and target array's present then we use empty paranthesis :"{}" with it.
we use this:{} as a target and other array's as a source.
*/
//one more method
const obj4 = {...obj1,...obj2}

console.log(obj4);  

/* when we get the values from the database , which gives us an array of objects*/

const users = [
{
    id: 1,
    email: "h1@gmail.com",
},
{
    id: 2,
    email: "h2@gmail.com",
},
{
    id: 3,
    email: "h3@gmail.com",
},
{
    id: 4,
    email: "h4@gmail.com",

}
]
//console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

/* if any value stuck into a loop */
//console.log(tinderUser.hasOwnProperty(isLoggedIn));
    


/**************DE-STRUCTURING*******************/

const course = {
 coursename: "js-in-hindi",
 price: 999,
 courseinstructor: "hitesh"
}
//console.log(course.courseinstructor);
/**********one more syntax for printing the values***********/
const {courseinstructor : instructor} = course
console.log(instructor);

/***********de-structuring in react***************/
/*
const navbar  = ({company})  => {

}   // Instead of using props.company again and again , we use this : ({company})  

navbar (company ="hitesh")
*/


/***********API'S*********** Firstly the values comes from the backend in XML structure, but the values are comes in the JSON structure**/
/*** In JSON , When we get the API'S in the object format: Inside the curly brasis ,the keys and values both are in string datatypes**/
// {
//     "name" : "hitesh",
//     "coursename" : "js-in-hindi",
//      "price" : "free"
// }
/*** Sometimes API'S are in array format ***/
// [
//     {}, 
//     {},
//     {}
// ]