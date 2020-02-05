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

if (gamerGuess == correctNumber) {
    console.log(`gamerGuess is equal to correctNumber`)
    feedback.innerText = 'congrats! you got it!'
    giveAward()
} else if (gamerGuess > correctNumber && gamerGuess <16) {
    feedback.innerText = 'too high, try again'
} else if (gamerGuess < correctNumber && gamerGuess >0) {
    feedback.innerText = 'too low, try again'
} 
    else {
        feedback.innerText = 'Please choose a number between 1 and 15 and try again.'
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
        imagePath = '#'  
        break;
    case 4:
    case 5: 
    case 6:
        imagePath = '#'    
        break;
//do the rest here
}

const awardImage = document.createElement('img') 
awardImage.setAttribute('src', '#')
const ribbon = document.querySelector('#ribbon')


ribbon.appendChild(awardImage)


}

//mdn it can give you a boolean about whether there are child nodes or not
//how to stop ribbons from repeating - only append child if the ribbon element does not have any child nodes yet