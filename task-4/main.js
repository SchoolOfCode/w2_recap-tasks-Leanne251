// 👉 On your HTML page, you will see an input field and an 'Add To List' button. Declare a new variable, importantThings, as an empty array. Using JavaScript, configure the website so that when you write something in the input field and click the Add To List button, a new item is added to the importantThings array.


// type in input, then click button
// this will add text from box into my new array (use .push() to add)
// find the value of what is in the input field and use in my function. 
    // is this a variable? 
    // use .value
// my function will use push to add to array. 

importantThings =[];

let input = document.querySelector("#important-thing");
let addToListButton = document.querySelector("#add-to-list");
let priorityNumber = document.querySelector("#priority");
let orderedList = document.querySelector("ol");
let NewOrderedList = document.querySelector("#new-ordered-list");

function addToList (){

    importantThings.push({
        item: input.value,
        priority: priorityNumber.value
     });
    
    // console.log("priority No", priorityNumber.value)
    
    let bullet = document.createElement("li");
    bullet.innerText = `Important Thing: ${input.value},   Priority: ${priorityNumber.value}`
    orderedList.appendChild(bullet); // append element using brackets! 

    console.log("important things unchanged", importantThings);

}

addToListButton.addEventListener("click", addToList);



//sort importantThings

function sortList (){
    importantThings.sort(function compare (value1, value2){
        return value1.priority - value2.priority;
     })

    function print (element){
        console.log(element.item);

        orderedList.remove();

        let newBullet = document.createElement("li");
        newBullet.innerText = element.item;
        console.log("new bullet from forEach", newBullet);
        NewOrderedList.appendChild(newBullet);
        
    }

    importantThings.forEach(print)   

    //now put what is printed to console on website.
    // create a new bullet point, add element.item to text,  and append to orederList

     // removes bullets
     // i think a new OL will need to be created as the li's were made in a function before. 
     // these have to be in the function because a new one is created every time it is clicked.



    // this leaves the old bullets. 
    // need to clear old bullet list?
    // the append new bullets.


    




        
    }

// click button to make above function run
// create event listener for order-list

let orderList = document.querySelector("#order-list");
orderList.addEventListener("click", sortList)




// bullet is created in above function as everytime function is created, new li is made.
// i can declare ol outside of function. 
// can i delete all bullets made and replace with new bullets from forEach loop?





// 👉 As well as adding the item to the in-memory array, now display each added item in an li element within the ordered list.

//ordered list >> <ol>
// we want to create new <li> and append to <ol>
// li.innerText = input.value


// 👉 Add a new label and input field element to your index.html file. This input field represents the priority value of your important thing, and should take in a number. Refactor your code so that, when you click your Add To List button, you add an object to your array, rather than a string value. For example: let importantThings = [{text: 'telephone mother', priority: 1}].

// should take in a number... put restrictions on this? 
// create an object inside my array.
    // put keys inside my array when it is declared.
    // add values to the keys by using dot notation in my function.
    // will still need to push these to my array.
    // will be an array of objects {item: , priority: }{item: , priority:}
    // can change value item by importantThings.item = input.value
    // make new variable for prioriy box, and priority.value as above.
    // this will be pushes to the array. 


// 👉 Add a new button to your site called Order List. When the button is clicked, reorder your list by priority.

// create button in HTML called order list 
// order object in array in order of priorty.
    // select priority key in object, and sort these from low (highest priority) to high.
    // can I use the .sort to put these values in order? sort(importantThings.priority)? 


//then match the item of each ordered object and replace the bullets with this information



// loop through the items in each object (forEach)
// and replace innerTextof each li bullet point with the text so the list shows in order. 