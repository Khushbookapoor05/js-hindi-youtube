const marwel_heroes = ["Ironman", "thor" , "spiderman"]
const dc_heroes = [ "superman","batman","flash"]  
//marwel_heroes.push(dc_heroes)
//console.log(marwel_heroes);   // on using the push method ,this will combines the array but dc_heroes as an element  

//const allHeroes = marwel_heroes.concat(dc_heroes) // concat will combines a new array. this method returns a new array without modifying any existing arrays
//console.log(allHeroes); // concat merge the element but only two arrays

const all_new_heroes = [...marwel_heroes , ...dc_heroes] // sprid operator : Here we can merge muliple arrays (two or more than two) 
console.log(all_new_heroes );
// this will merge the two array's into indivitual elements easily 

const another_array = [1,2,3,[4,5,6],7,[4,5,[7,9]]]
const real_another_array = another_array.flat(Infinity)
console.log( real_another_array);


/*for scrapting data ,we select the data from web pages then sometimes it comes in  different formats it comes in node list or in objects and strings but we wants an array then we do {
 */   
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));

console.log(Array.from({name: "Hitesh"}));   // interesting

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1, score2,score3));  
  




