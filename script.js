let toDoList = []
let ulEl = document.getElementsByClassName("form-item-list")[0]
let toDoInput = document.getElementsByClassName("todo-input")[0]

let btnAdd = document.getElementById('btnAdd')
btnAdd.addEventListener('click', handleAddToDo)
function handleAddToDo() {
    toDoList.push(toDoInput.value)
    toDoInput.value = ''
    console.log(toDoList)
    ulEl.innerHTML = ''
    handleShowUI()
}
function handleShowUI() {
    for (let i = 0; i < toDoList.length ; i++) {
        const liEl = document.createElement('li')
        liEl.classList.add('group')
        liEl.innerHTML = toDoList[i];
    
        liEl.appendChild(handleAddRemoveButton())    
        ulEl.appendChild(liEl)
    }
    handleRemoveToDoItem()
}

function handleAddRemoveButton() {
    const btnRemoveEl = document.createElement('button')
    btnRemoveEl.classList.add('btn-remove')

    const iconEl = document.createElement('i')
    iconEl.setAttribute('class', 'fa fa-trash-o')
    btnRemoveEl.appendChild(iconEl)
    return btnRemoveEl
}

function handleRemoveToDoItem() {
    let btnIconRemoveList = [].slice.call(document.getElementsByClassName('btn-remove'))
    console.log('aaaa: ', btnIconRemoveList)
    for (let i = 0; i < btnIconRemoveList.length; i++) {
        btnIconRemoveList[i].onclick = function() {
            toDoList.splice(i,1)
            // alert(toDoList)
            ulEl.innerHTML = ''
            handleShowUI()
        }
    }
}