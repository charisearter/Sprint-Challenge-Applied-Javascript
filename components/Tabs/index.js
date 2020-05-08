// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
const mainTopicDiv = document.querySelector('body > div.tabs > div')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        const tabData = response.data.topics
        // Array.from(tabData.forEach(topic => {
        //     itemTopic = document.createElement('div')
        //     itemTopic.classList.add('tab')
        //     itemTopic.textContent(topic)
        //     mainTopicDiv.appendChild(itemTopic)
        // }))
     for (let i = 0; i < tabData.length; i++){
        tabData[i] = document.createElement('div')
        tabData[i].classList.add('tab')
        tabData[i].textContent = tabData[i]
        mainTopicDiv.appendChild(tabData[i])
     }
       return (tabData)
        
    })