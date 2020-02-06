document.querySelector('header > h1').innerText = "Guessing Game"
document.querySelector('header > h2').innerText = "LEARNING ABOUT LOOPS"


let correctNumber = Math.floor(Math.random() * 15)
let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1

console.log(correctNumber)


function evalGuess(){

totalGuesses++ //incrementing by 1

gamerGuess = document.querySelector('#guess').value

const feedback = document.querySelector('#feedback')

//Once someone has reached the correct answer, it won't iterate anymore so you can see how many tries it took them just to get to the correct answer.
if (ribbon.hasChildNodes() == true && gamerGuess <16 && gamerGuess >0) {
    totalGuesses -= 1
}

if (gamerGuess == correctNumber) {
    console.log(`gamerGuess is equal to correctNumber`)
    feedback.innerText = 'Congrats! You are correct!'
    if (ribbon.hasChildNodes() == false){
    giveAward() 
    }
    
} else if (gamerGuess > correctNumber && gamerGuess <16) {
    feedback.innerText = 'Too high. Try again.'
} else if (gamerGuess < correctNumber && gamerGuess >0) {
    feedback.innerText = 'Too low. Try again.'
} 
    else {
    feedback.innerText = 'Please choose a number between 1 and 15.'
     totalGuesses  -= 1
    }
    document.querySelector('#attempts').innerText = totalGuesses

}


function giveAward() {
console.log('Congrats')
let imagePath = "#"

switch (totalGuesses){
    case 1:
    case 2: 
    case 3:
        imagePath = 'images/first.png'  
        break;
    case 4:
    case 5: 
    case 6:
        imagePath = 'images/second.png'    
        break;
    default:
   
        imagePath = 'images/third.png'
        break  
}

const awardImage = document.createElement('img') //creates a <img> element
awardImage.setAttribute('src', imagePath)
const ribbon = document.querySelector('#ribbon')


ribbon.appendChild(awardImage)

}



