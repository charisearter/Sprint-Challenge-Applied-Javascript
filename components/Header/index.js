// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const headerBox = document.querySelector('.header-container')
function Header() {
    //set elements
    const headerDiv = document.createElement('div')
    const dateSpan = document.createElement('span')
    const h1 = document.createElement('h1')
    const tempSpan = document.createElement('span')

    //structure
    headerDiv.appendChild(dateSpan)
    headerDiv.appendChild(h1)
    headerDiv.appendChild(tempSpan)

    //add classes
    headerDiv.classList.add('header')
    dateSpan.classList.add('date')
    tempSpan.classList.add('temp')

    //text Content ???
    dateSpan.textContent = 'SMARCH 28, 2019'
    h1.textContent = 'Lambda Times'
    tempSpan.textContent = '98°'

    //append to header
    headerBox.appendChild(headerDiv)
    return headerDiv
}

Header()