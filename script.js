const input = document.querySelector('.guess')
const checkBtn = document.querySelector('.check')
const againBtn = document.querySelector('.again')
let questionMark = document.querySelector('.number')
const message = document.querySelector('.message')
const score = document.querySelector('.score')
const body = document.querySelector('body')

let randomNumber = Math.floor(Math.random() * 21)
console.log(randomNumber)
 
//Check Button
checkBtn.addEventListener('click', function(){
    
  if(input.value == randomNumber){
    body.style.backgroundColor = 'green'
    questionMark.style.width = '25rem'
    questionMark.innerText = randomNumber
    message.innerText = '🥳 Correct Number!'
  }  
  else if(input.value >= randomNumber){
    message.innerText = '📈 Your Guess is to High'
    score.innerText--
  }
  else if(input.value <= randomNumber){
    message.innerText = '📉 Your guess is to low'
    score.innerText--
  }
  else{
    score.innerText--     
  }
  if(score.innerText == 0){
    body.style.backgroundColor = 'red'
    message.innerText = 'You Lose'
    checkBtn.disabled = true
  }
})
//Again Button
againBtn.addEventListener('click', function(){
    body.style.backgroundColor = '#222'
    questionMark.innerText = '?'
    score.innerText = '20'
    questionMark.style.width = '15rem'
    randomNumber = Math.floor(Math.random() * 21)
    console.log(randomNumber)
})