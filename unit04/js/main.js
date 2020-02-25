function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  console.log(getRandomIntInclusive(1,12))

  let month = getRandomIntInclusive(1,12)

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