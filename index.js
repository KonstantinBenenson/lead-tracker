// An alternative way to call out a function when something is done with the html-element
// The Onclick attribute is not needed in the html-line if this method is chosen
let myLeads = []

const inputKey = document.getElementById("input-key")
const inputVal = document.getElementById("input-value")
const inputBtn = document.getElementById("input-btn")
const clearBtn = document.getElementById("clear-btn")
const ulEl = document.getElementById("ul-el")

let htmlEl = ""

inputBtn.addEventListener("click", function () {
    let key = inputKey.value
    let lead = inputVal.value    
    myLeads.push(lead)
    // pushToHtmlHandler(lead)
    localStorage.setItem("leads", JSON.stringify(myLeads))
    showList()
    inputKey.value = ""
    inputVal.value = ""
})

// function pushToHtmlHandler(lead) {
//     // An alternative way to append an <li> elemement with its containts to the Unordered List
//     // const li = document.createElement("li")
//     // li.textContent = myLeads[i]
//     // ulEl.innerHTML(li)
//     htmlEl += `<li>
//                 <a target="_blank" href="${lead}">${lead}</a>
//                </li>`
    
//     ulEl.innerHTML = htmlEl
// }

function showList() {
    myLeads = JSON.parse(localStorage.getItem("leads"))
    htmlEl = ""
    for (let i = 0; i < myLeads.length; i++)
    {
        htmlEl += `<li>
                      <a target="_blank" href="${myLeads[i]}">${myLeads[i]}</a>
                   </li>`
    }
    ulEl.innerHTML = htmlEl
}

// Clear the set of leads pushed to the localStorage and after - refres the leads list shown to the user.
clearBtn.addEventListener("click", function() {
    localStorage.clear()
    showList()
})

// function onDelete () {
//     // How to create a delete process?
// }
    


