// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
function makeCard (/*cardAttrs*/){
   // const { headline, authorImgUrl, authorName } = cardAttrs

    //set elements
    const newCard = document.createElement('div')
    const headlineDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imgDiv = document.createElement('div')
    const photo = document.createElement('img')
    const authorSpan = document.createElement('span')

    //structure
    newCard.appendChild(headlineDiv)
    newCard.appendChild(authorDiv)
    authorDiv.appendChild(imgDiv)
    imgDiv.appendChild(photo)
    authorDiv.appendChild(authorSpan)
    //text content
    // headlineDiv.textContent = headline
    // photo.src = authorImgUrl
    // authorSpan.textContent = authorName


    //class
    newCard.classList.add('card')
    headlineDiv.classList.add('headline')
    authorDiv.classList.add('author')
    imgDiv.classList.add('img-container')
    console.log(newCard)

    
    return newCard

}
