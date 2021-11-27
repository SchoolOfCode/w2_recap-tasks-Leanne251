

let counter = document.querySelector("p");
count = 0;

function increaseTime(){
    counter.innerText = count++;
    if (count === 13){
        clearInterval(countToTwelve);
    } 
}

let countToTwelve = setInterval(increaseTime, 1000)


// create an element for the counter using querySelecter

//counter is an object.
// every loop i want to add one to counter. 


// use setInterval to count to 12 seconds. .. set Interval takes a function & a time in miliseconds.
// create a function to use in setInterval which will add one to counter 
//every second. 

//use clearTimeout to cancel timer. 

