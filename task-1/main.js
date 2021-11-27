const celebs = [
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson"
 ];


function makeLegend (name){
  return `${name} is now a legend`
}

console.log(makeLegend("leanne"));
 

let legendaryCelebs = celebs.map(makeLegend);
console.log(legendaryCelebs);

function startsWithVowel(celebName){
 
  let regEx = /^[aeiou]/i   // checks for words starting with vowel and ignores case.
  return celebName.match(regEx)

}
let vowelCelebs = celebs.filter(startsWithVowel)

console.log(vowelCelebs);

// Task 1
// 👉 Write a function called makeLegend, which takes in a name (string) as its 
//only argument. The function should return a new string which includes the name 
//plus the words 'is now a legend.'. For example, if the name given was 'Chris', 
//the function would return the string 'Chris is now a legend.'.

// 👉 Using an array method and the makeLegend function, create a new array which 
//includes 'is now a legend' for each item. Save this new array to the variable 
//legendaryCelebs.

// 👉 Use an array method to produce a new array of all of the celebrity names 
//which start with a vowel and store in a new variable called vowelCelebs.