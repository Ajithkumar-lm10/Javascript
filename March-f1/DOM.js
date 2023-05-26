/* 
* DOM stands for Document Object Model.When a web page is loaded, the browser creates a Document Object Model of the page.
* The Document Object Model (DOM) is an API (Application Programming Interface) that represents the structure
  of HTML as a hierarchical tree of objects. It provides a way to interact with the elements, attributes, and content of a web page.
* The DOM enables developers to access, manipulate, and modify the content and structure of a document dynamically


const btn = document.createElement("button")
btn.innerText = "click here";

btn.addEventListener("click" , () => {
    let h1Elmt = document.createElement("h1")
    h1Elmt.innerText = "This is about eventListner"
    document.body.append(h1Elmt)
})

document.body.append(btn) */

// append vs appendChild
// appendChild only takes 1 parameter whereas in append you can include multiple node
// if you assign the result of append to a variable, the variable will hold the value undefined. but appendChild actually
// returns the appended child node because it has the reference for it.

const child1 = document.createElement("h1")
child1.innerText = "child 1"
const someText = document.createTextNode("this is text")
const child2 = document.createElement("h1")
child2.innerText = "child2"

// const returnType = document.body.append(child1 , child2 , someText)
// console.log(returnType)
const returnTypeApc =  document.body.appendChild(child1)
console.log(returnTypeApc)




document.body.appendChild(divElement)

const formOutput = document.querySelector("form")
formOutput.addEventListener("submit",(event) => {
    event.preventDefault()
    const div1 = document.createElement("div")
    div1.innerText = event.target.value;
    document.body.append(div1)
})