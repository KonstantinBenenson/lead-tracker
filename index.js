// An alternative way to call out a function when something is done with the html-element
// The Onclick attribute is not needed in the html-line if this method is chosen
let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    let lead = inputEl.value
    myLeads.push(lead)
    pushToHtmlHandler(lead)
    inputEl.value = ""
})

let htmlEl = ""

function pushToHtmlHandler(lead) {
    // An alternative way to append an <li> elemement with its containts to the Unordered List
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.innerHTML(li)
    htmlEl += `<li>
                <a target="_blank" href="${lead}">${lead}</a>
               </li>`
    
    ulEl.innerHTML = htmlEl
}

// function onDelete () {
//     // How to create a delete process?
// }
    


