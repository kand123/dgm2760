// create an array with 4 trees 

let trees = ['aspen', 'Oak', 'ash', 'Maple']
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

document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 1) {
trees.splice(1,1)
listTrees()
    } else {
        errorElement.textContent = 'Uh oh. I cannot remove the second tree. There are no trees.'
    }
}

document.querySelector('#remove_treeLast').onclick = () => {
    if (trees.length > 0) {
trees.pop()
listTrees()
    } else {
        errorElement.textContent = 'Uh oh. I cannot remove the last tree. There are no trees.'
    }
}


document.querySelector('#sortTrees').onclick = () => {
 trees.sort()
 listTrees()
}

document.querySelector('#lowerTrees').onclick = () => {
    trees = trees.join(" ").toLowerCase()
    trees = trees.split(" ",trees.length)
    
    console.log(trees.length)
    listTrees()
}

document.querySelector('#showName3').onclick = () => {
    if (trees.length > 2) {
errorElement.textContent = `${trees[2]}`
    } else {
        errorElement.textContent = 'Uh oh. There are not enough trees.'
    }
}

document.querySelector('#showName4').onclick = () => {
    if (trees.length > 3) {
errorElement.textContent = `${trees[3]}`
    } else {
        errorElement.textContent = 'Uh oh. There are not enough trees.'
    }
}
