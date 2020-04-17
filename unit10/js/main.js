

async function getHotelData() {
    try {
const response = await fetch("../hotel.json")
method: 'GET'
return await response.json(); //return the JSON object
    } catch (error) {
        console.error(error)
    }
    
}
let hotelData = {}
getHotelData().then(data => hotelData = data)

// console.log(hotelData)

let buttonAll = document.querySelectorAll('button')
buttonAll.forEach(buttonA => addEventListener('click', hotelInfo))



function hotelInfo(event) {
   let hotelChoice = hotelData.hotels.find(hotel => {
       return event.target.id === hotel.name.toLowerCase()
   })

   document.querySelector("#hotelName").textContent = `${hotelChoice.name} Hotel`
   document.querySelector("#address").textContent = `${hotelChoice.address}`
   document.querySelector("#rooms").textContent = `${hotelChoice.rooms}`
   document.querySelector('#gym').textContent = `${hotelChoice.gym}`
   document.querySelector('#type').textContent = `${hotelChoice.roomTypes}`
   document.querySelector("#picture").setAttribute('src', `${hotelChoice.pictures}`) 

}
