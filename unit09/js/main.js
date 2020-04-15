function duplicateMenu() {
// get all of the anchor elements from the top menu
let topList = document.querySelectorAll('ul#primaryNavigation li a')
console.log(topList)

// create the new list items for the bottom of the page
let newList = document.createElement('ul')
topList.forEach(menuItem => {
    let newLI = document.createElement('li')
    let newLink = document.createElement('a')
    newLink.setAttribute('href', menuItem.getAttribute('href'))
      //'copy' the textContent from upper menu to new menu
      //forgot to denfine the lower nav area at first
    let lowerNav = document.querySelector('#smallNavArea')
//I tried to add the text content to the LI at first instead of the newLink
    newLink.textContent = menuItem.textContent

    //append children to make them appear in the DOM 
   console.log(newLI)
    newLI.appendChild(newLink);
    newList.appendChild(newLI);
    lowerNav.appendChild(newList);

  
})
}

duplicateMenu()