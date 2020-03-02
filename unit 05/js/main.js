// create an array with 4 trees 

const trees = ['aspen', 'Oak', 'ash', 'Maple']
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

// Add a redwood

document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood')
    listTrees()
}

// Add a pear to the start

document.querySelector('#add_pear').onclick = () => {
    trees.unshift('Pear')
    listTrees()
}

document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0) {
trees.shift()
listTrees()
    } else {
        errorElement.textContent = 'Uh oh. I cannot remove the first tree. There are no trees.'
    }
}

