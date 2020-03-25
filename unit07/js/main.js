let message 

const pizza = {
    crust: 'thin',
    size: 'small',
    topping: 'pepperoni',
    buildPizza: function (){
    console.log('buildPizza method has been called')
    message = `Baking a ${pizza.size} pizza on a ${pizza.crust} crust with a ${pizza.topping} topping and cheese just for you. We will notify you when it is ready for pick up. Enjoy!`
    document.querySelector('#feedback').textContent = message
}, 
    shoppingList: () => {
    let flour = 1
    if (pizza.crust === 'thick') flour *= 1.5
    if (pizza.size ==='medium') flour *= 1.5
    if (pizza.size === 'large') flour *= 2

    let pizTop = 1
    if (pizza.size === 'medium') pizTop *= 1.25
    if (pizza.size === 'large') pizTop *= 1.5

    message = `You will need to purchase ${flour} cup(s) of flour and ${pizTop} lb of ${pizza.topping} for this pizza. Happy baking!`
    document.querySelector('#feedback').textContent = message
}
}



document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')
document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')

document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#medium').addEventListener('click', () => pizza.size = 'medium')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

//buttons

document.querySelector('#build').addEventListener('click', () => pizza.buildPizza())
document.querySelector('#shopping').addEventListener('click', () => pizza.shoppingList())

