// JavaScript – functions
// The following exercise contains the following subjects:
// ● functions
// Instructions
// Please make the following changes to the HTML file while
// navigating the DOM.
// Create a variable that holds the <li> element with the class
// “start-here”. Use traverse methods to complete these tasks:
// 1. Change the text from “title 2” to “main title”
// 2. Add another subtitle with the text “subtitle 4”
// 3. Delete the last <li> element from the list.
// 4. Change the <title> element text to “Master Of The Dom”.
// 5. Change the text of the <p> element ot something else of
// your

let li = document.getElementsByClassName("start-here");
li[0].innerText = "main title";


let ul = document.getElementsByTagName("ul");
// ul[1].appendChild(document.createElement("li")).innerText = "subtitle 4";
let createElement = (el, text) => {
    let newEl = document.createElement(el);
    newEl.innerText = text;
    return newEl;
}
ul[1].appendChild(createElement("li", "subtitle 4"));


let allLi = document.getElementsByTagName("li");
allLi[allLi.length - 1].remove();

document.title = "Master Of The Dom"

let p = document.getElementsByTagName("p");
p[0].innerHTML = "somthig else of mine :)"
