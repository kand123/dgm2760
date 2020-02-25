function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  console.log(getRandomIntInclusive(1,12))

  let month = getRandomIntInclusive(1,12)
  
  let day = getRandomIntInclusive(1,30)

  function getMonthName(month) {
let name 
switch (month) {
    case 1:
        name = "January"
        break;
case 2: 
name = "February"
break;
case 3: 
name = "March"
break;
case 4: 
name = "April"
break;
case 5:
name = "May"
break;
case 6:
name = "June"
break;
case 7:
name = "July"
break;
case 8:
name = "August"
break;
case 9:
name = "September"
break;
case 10:
name = "October"
break;
case 11:
name = "November"
break;
case 12:
name = "December"
break;
default:
    name = "not a month"
    break;
}
return name
  }

  let fate = getRandomIntInclusive(1,5)
console.log(fate)

  function getFortune(fate) {
let message
switch (fate) {
case 1: 
message = "win the lotto and retire the next day"
break;
case 2: 
message = 'meet the President of the United States. He will come to you for advice'
break;
case 3: 
message = 'inherit a large fortune from a distant relative and buy a private island'
break;
case 4: 
message = 'lose all your teeth in a tragic accident'
break;
case 5: 
message = 'find the fountain of youth'
break;
default: 
message = 'win a contest for a brand new sports car'
break;
      }
return message
  }


  const monthName = getMonthName(month)
  const fortuneGenerator = getFortune(fate)
  
  const fortuneRevealed = `On ${monthName} ${day}, you will ${fortuneGenerator}.`

  function knowFate(){

  document.querySelector('#fortune').innerText = fortuneRevealed

}