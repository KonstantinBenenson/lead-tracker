let myLeads = []

const inputKey = document.getElementById("input-key")
const inputVal = document.getElementById("input-value")
const inputBtn = document.getElementById("input-btn")
const clearBtn = document.getElementById("clear-btn")
// const delBtn = document.getElementById("del-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")

// const tabPath = window.location.pathname
// const tab = [
//     { "url": tabPath }
// ]


// An alternative way to call out a function when something is done with the html-element
// The Onclick attribute is not needed in the html-line if this method is chosen
tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        inputVal.value = tabs[0].url
    })
})

let htmlEl = ""
let key = "leads"

// The logic below provides the functionality to show the data that is stored in localStorage to the page after each refresh.  
const temporaryList = JSON.parse(localStorage.getItem(key)) // Try to get the list of the saved values into the temporary holder.
function showAfterRefresh(){
    myLeads = temporaryList
    showList(myLeads)
}
if (temporaryList) // If it is not falsy (meaning there is something inside) we dump it to the array and show on the page.
{
    showAfterRefresh()
}

// ------ //
inputBtn.addEventListener("click", function () {
    // let key = inputKey.value // May be use it to store each lead separatly in the different object
    let lead = inputVal.value
    myLeads.push(lead)
    localStorage.setItem(key, JSON.stringify(myLeads))
    showList(myLeads)
    inputKey.value = ""
    inputVal.value = ""
})

function showList(arr) {
    htmlEl = ""
    for (let i = 0; i < arr.length; i++) {
        htmlEl += `<li>
                      <a target="_blank" id="${arr[i]}" href="${arr[i]}">${arr[i]}</a> 
                      <button type="button" style="margin-left: 5px;
                      background-color: rgba(231, 60, 54, 0.801);
                      border-color: rgb(196, 122, 11);
                      width: 70px;
                      height: 25px;" onclick="dltLink(this)" id="${arr[i]}}">DELETE</button>
                   </li>`
    }
    ulEl.innerHTML = htmlEl
}

// Clear the set of leads pushed to the localStorage and after - refresh the leads list shown to the user.
clearBtn.addEventListener("dblclick", function () {    
    localStorage.clear()
    myLeads = []
    showList(myLeads)
})

// Allows to remove a chosen lead with a Delete button.
// Refreshes a list after it removes an element.
function dltLink(obj) {
    let id = obj.id
    let linkIdx = ""
    let currentLeads = JSON.parse(localStorage.getItem(key))
    myLeads = currentLeads
    for (let i = 0; i < myLeads.length; i++)
    {
        if (myLeads[i] === id)
        {
            linkIdx === i
        }        
    }
    myLeads.splice(linkIdx, 1)
    localStorage.clear() 
    localStorage.setItem(key, JSON.stringify(myLeads))
    showList(myLeads)
}




