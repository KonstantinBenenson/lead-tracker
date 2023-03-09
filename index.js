// An alternative way to call out a function when something is done with the html-element
// The Onclick attribute is not needed in the html-line if this method is chosen
let myLeads = []

const inputKey = document.getElementById("input-key")
const inputVal = document.getElementById("input-value")
const inputBtn = document.getElementById("input-btn")
const clearBtn = document.getElementById("clear-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")

// const tabPath = window.location.pathname
// const tab = [
//     { "url": tabPath }
// ]

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        inputVal.value = tabs[0].url
    })
})

let htmlEl = ""

// The logic below provides the funcionality to show the data that is stored in localStorage to the page after each refresh.  
const temporaryList = JSON.parse(localStorage.getItem("leads")) // Try to get the list of the saved list into the temporary list.
if (temporaryList) // If it is not falsy (meaning there is something inside) we dump it to the array and show on the page.
{
    myLeads = temporaryList
    showList(myLeads)
}
// ------ //

inputBtn.addEventListener("click", function () {
    // let key = inputKey.value // May be use it to store each lead separatly in the different object
    let lead = inputVal.value
    myLeads.push(lead)
    localStorage.setItem("leads", JSON.stringify(myLeads))
    showList(myLeads)
    inputKey.value = ""
    inputVal.value = ""
})

function showList(arr) {
    htmlEl = ""
    for (let i = 0; i < arr.length; i++) {
        htmlEl += `<li>
                      <a target="_blank" href="${arr[i]}">${arr[i]}</a>
                   </li>`
    }
    ulEl.innerHTML = htmlEl
}

// Clear the set of leads pushed to the localStorage and after - refres the leads list shown to the user.
clearBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    showList(myLeads)
})

// function deleteLead () {
//     // How to create a delete process for a single lead?
// }



