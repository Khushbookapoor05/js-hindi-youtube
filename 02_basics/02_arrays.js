const marwel_heroes = ["Ironman", "thor" , "spiderman"]
const dc_heroes = [ "superman","batman","flash"]  
//marwel_heroes.push(dc_heroes)
//console.log(marwel_heroes);   // on using the push method ,this will combines the array but dc_heroes as an element  

//const allHeroes = marwel_heroes.concat(dc_heroes) // concat will combines a new array. this method returns a new array without modifying any existing arrays
//console.log(allHeroes); // concat merge the element but only two arrays

const all_new_heroes = [...marwel_heroes , ...dc_heroes] // here we can merge muliple arrays 
console.log(all_new_heroes );
// this will merge the two array's into indivitual elements easily 

