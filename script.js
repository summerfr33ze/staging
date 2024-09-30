const displayResponse = document.querySelector('.display-response')

const submitButton = document.querySelector('.submit-button')

const responseArray = ["It says there's three hundred in the bay but they're not there. First shift fuck-up.","Stop trying to order sex toys, weirdo","There aren't enough Hot Wheels in this bay to fulfill your childhood dreams","You really fucked up in high school to be entering numbers into computers all day nerd","It's a rush order bro, you don't have time to check batch numbers", "I was too busy to go to the bathroom and may have relieved myself in one of the bins with that part number",]

function ChooseRandomResponse() {
  

  const randomResponse =  responseArray[Math.floor(Math.random() * responseArray.length)]
  
  console.log(randomResponse)
  

 
  displayResponse.textContent = randomResponse
  
}



submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    ChooseRandomResponse()
})