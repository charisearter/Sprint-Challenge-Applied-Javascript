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
const cardBox = document.querySelector('.cards-container')
function makeCard (topic){
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

     //class
     newCard.classList.add('card')
     headlineDiv.classList.add('headline')
     authorDiv.classList.add('author')
     imgDiv.classList.add('img-container')
     
    //text content
    headlineDiv.textContent = topic.headline
    photo.src = topic.authorPhoto
    authorSpan.textContent = topic.authorName   
    
    //add to DOM
    cardBox.appendChild(newCard)

    return newCard

}

    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        for (const item in response.data.articles){
            response.data.articles[item].forEach(topic => {
                cardBox.appendChild(makeCard(topic))
            })
            
          
         }
       
        //return cardBox.appendChild(makeCard(theArticle))
        
        
    })


