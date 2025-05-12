let element = 56;


// document.getElementsByClassName
// document.getElementsByTagName

// Id one element
let el = document.getElementById("element")


// edit content

// el.innerText = "<b>liti</b> is beautiful"
el.innerHTML = "<b>liti</b> is the cutest"

// edit attributes 
el.style.color = "red"
el.style.fontSize = "60px"
el.style.padding = "20px"
el.style.backgroundColor = "blue"

//display element classes
el.classList.add('bold')
console.log(el.classList)


// get elements by class name
let els = document.getElementsByClassName("text")
console.log(els)

let el2 = els[3];
el2.innerText = "this a selected text"


for (i = 0; i < els.length; i++) {

    els[i].style.color = "yellow"
}