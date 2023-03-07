// An alternative way to call out a function when something is done with the html-element
// The Onclick attribute is not needed in the html-line if this method is chosen
let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let testLead = "www.ya.ru"

inputBtn.addEventListener("click", function() {
    let lead = inputEl.value
    // if (contains(lead, myLeads) === false)
    if (myLeads.includes(lead) !== true)
        myLeads.push(lead)
    
    renderUnorderedList()
})

// function contains(el, ...array) {
//     for (let i = 0; i < array.length; i++)
//     {
//         if (array[0] === el)
//             return true
//     }
//     return false
// }

function renderUnorderedList () {
    for (let i = 0; i < myLeads.length; i++)
    {
        ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

        // An alternative way to append an <li> elemement with its containts to the Unordered List
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.innerHTML(li)
    }
}

