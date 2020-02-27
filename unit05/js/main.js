// create an array with 4 trees 

const trees = ['aspen', 'weeping willow',  'Oak', 'ash', 'Maple']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

// Display list of trees inside the displayResults div
const listTrees = () => {
let treeList = ''
trees.forEach(tree => {
treeList += `${tree} <br>` 

})
displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`
}

listTrees()