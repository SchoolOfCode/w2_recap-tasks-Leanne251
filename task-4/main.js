// 👉 On your HTML page, you will see an input field and an 'Add To List' button. Declare a new variable, importantThings, as an empty array. Using JavaScript, configure the website so that when you write something in the input field and click the Add To List button, a new item is added to the importantThings array.


// type in input, then click button
// this will add text from box into my new array (use .push() to add)
// find the value of what is in the input field and use in my function. 
    // is this a variable? 
    // use .value
// my function will use push to add to array. 



importantThings =[];

let inputThing = document.querySelector("#important-thing");
let addToListButton = document.querySelector("#add-to-list");

function addToList (){

    importantThings.push(inputThing.value)
    

}

addToListButton.addEventListener("click", addToList);

console.log(importantThings);

// 👉 As well as adding the item to the in-memory array, now display each added item in an li element within the ordered list.

// 👉 Add a new label and input field element to your index.html file. This input field represents the priority value of your important thing, and should take in a number. Refactor your code so that, when you click your Add To List button, you add an object to your array, rather than a string value. For example: let importantThings = [{text: 'telephone mother', priority: 1}].

// 👉 Add a new button to your site called Order List. When the button is clicked, reorder your list by priority.

1
2
3
4

5