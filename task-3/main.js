

async function getCatImage (){
    let myRequest = await fetch ('https://api.thecatapi.com/v1/images/search');
    console.log("my Result from fetch", myRequest)
    let catImageResult = await myRequest.json(); // remember to call json!! 
    console.log("my cat Image Result from json", catImageResult);
    let catImage = catImageResult[0].url // gets the image URL from promise
    console.log("image location", catImage);


    let img = document.querySelector("img")
    img.src = catImage;
    let catHere = document.querySelector("#cat-here")
    catHere.innerText = catImage 

    //IM NOT SURE IF THE ABOVE ANSWER IS QUITE RIGHT FOR PART TWO..?!?!
 
   
}





//  let src = document.getElementById("#cat-here");
//  src.appendChild(img) 
 
// src.appendChild(img); 



getCatImage()



//let catImage = catImageResult[0].url // gets the image URL from promise
  //  console.log(catImage);
    // selects HTML element we want
    // let img = document.createElement('img');
    // img.src= `"${catImage}"`
    // let catHere = document.querySelector('#cat-here')
    
    // catHere.appendChild(img)
    // catHere.innerText = "hello"

// 👉 Using fetch, get a random cat image URL using the following 
//API: https://api.thecatapi.com/v1/images/search

// 👉 Once you have retrieved your image URL, display the image on the page using 
//the img element provided. A different picture should be displayed every time you reload the page.

// 👉 Create a button element. Add an event listener to the button so that, when you 
//click the button, a new image is displayed.