// Bai tap 1: section ToDoList 
let toDoList = [] // default array for toDoList
let ulEl = document.getElementsByClassName("form-item-list")[0]
let toDoInput = document.getElementsByClassName("todo-input")[0] 

let btnAdd = document.getElementById('btnAdd')
btnAdd.addEventListener('click', handleAddToDo)
function handleAddToDo() {
    toDoList.push(toDoInput.value) // add new value toDoInput to array toDoList
    toDoInput.value = '' // remove user's input
    console.log(toDoList)
    ulEl.innerHTML = '' // remove all nodes in ul Element to draw new nodes
    handleShowUI() // draw li to show ToDolist
}
function handleShowUI() {
    for (let i = 0; i < toDoList.length ; i++) {
        const liEl = document.createElement('li')
        liEl.classList.add('group') //custom li with .group
        liEl.innerHTML = toDoList[i]; // get content for li
    
        liEl.appendChild(handleAddRemoveButton())   // add remove button to li
        ulEl.appendChild(liEl) // add li to ul
    }
    handleRemoveToDoItem()
}

// add remove button with fontawsome icon trash 
function handleAddRemoveButton() {
    const btnRemoveEl = document.createElement('button')
    btnRemoveEl.classList.add('btn-remove')

    const iconEl = document.createElement('i')
    iconEl.setAttribute('class', 'fa fa-trash-o')
    btnRemoveEl.appendChild(iconEl)
    return btnRemoveEl
}
// handle query all .btn-remove, then remove element in toDoList with index
function handleRemoveToDoItem() {
    let btnIconRemoveList = [].slice.call(document.getElementsByClassName('btn-remove'))
    console.log('aaaa: ', btnIconRemoveList)
    for (let i = 0; i < btnIconRemoveList.length; i++) {
        btnIconRemoveList[i].onclick = function() {
            toDoList.splice(i,1)
            // console('toDoList after remove: ', toDoList)
            ulEl.innerHTML = ''
            handleShowUI()
        }
    }
}