//JAVASCRIPT DOCUMENT
var nameLabel = document.getElementById("nameLabel")
var nameInput = document.getElementById("nameInput")
nameInput.onclick = function() {
    nameLabel.style.opacity = 1;
    nameLabel.style.color = "#1abc9c";
}

var emailLabel = document.getElementById("emailLabel")
var emailInput = document.getElementById("emailInput")
emailInput.onclick = function() {
    emailLabel.style.opacity = 1;
    emailLabel.style.color = "#1abc9c";
}

var phoneLabel = document.getElementById("phoneLabel")
var phoneInput = document.getElementById("phoneInput")
phoneInput.onclick = function() {
    phoneLabel.style.opacity = 1;
    phoneLabel.style.color = "#1abc9c";
}

var messageLabel = document.getElementById("messageLabel")
var messageInput = document.getElementById("messageInput")
messageInput.onclick = function() {
    messageLabel.style.opacity = 1;
    messageLabel.style.color = "#1abc9c";
}

var imageCoverPlus = document.getElementsByClassName("image-cover-plus");
for(let i = 0; i< imageCoverPlus.length; i++) {
    imageCoverPlus[i].addEventListener('click', handleModalPortfolio)
}

// handle open modal
function handleModalPortfolio() {
    const imagePortfolio = this.nextElementSibling
    const header = imagePortfolio.getAttribute('data-header') // get dynamic data for header 

    const headerEl = document.getElementsByClassName('modal-header') // get element header of Modal 

    headerEl[0].innerHTML = header // if data type is text, use .innerHTML to set text for El

    const image = imagePortfolio.getAttribute('data-img')
    const imageModalEl =  document.getElementsByClassName('modal-img-portfolio')

    imageModalEl[0].setAttribute("src", image) // set data (img) to attribute "src" modal-img-portfolio class El

    const content = imagePortfolio.getAttribute('data-content')
    const contentModalEl = document.getElementsByClassName('modal-content')

    contentModalEl[0].innerHTML = content

    const modalPortfolio = document.getElementsByClassName('modal-portfolio') 
    modalPortfolio[0].classList.remove('hidden')
    modalPortfolio[0].classList.add('display-block')

    handleBackgroundModal()

    const modalContainerElement = document.getElementsByClassName('modal-container')[0]
    modalContainerElement.addEventListener('click', handleOnClickModalContainer)

    
}

// var closeBtn = document.getElementById("btn-close");
// closeBtn.onclick  = function() {
//     document.getElementsByClassName('modal-portfolio')[0].classList.remove('display-block')
//     // document.getElementsByClassName('modal-portfolio')[0].classList.add('hidden')
//     document.getElementsByClassName('modal-container')[0].remove()
//     document.body.classList.remove('open-modal')
// }

function handleOnClickModalContainer() {
    document.getElementsByClassName('modal-portfolio')[0].classList.remove('display-block')
    document.getElementsByClassName('modal-container')[0].remove()
    document.body.classList.remove('open-modal')
}

document.addEventListener("scroll", handleScrollBody);

function handleScrollBody() {
    const topBody = document.documentElement.scrollTop
    const backTopEl = document.getElementsByClassName('back-to-top')[0]
    if (topBody >= 1400) {
        backTopEl.classList.remove('hidden')
    } else {
        backTopEl.classList.add('hidden')
    }
}

// Handle Collapse
// get current class is using height
const firstCardHeaderEl = document.getElementsByClassName('card-header')[0]
const firstCardContentEl = firstCardHeaderEl.nextElementSibling
const firstCardBodyEl = firstCardContentEl.children[0]
firstCardContentEl.style.height = `${firstCardBodyEl.clientHeight}px`

const headerCollapseEl = document.getElementsByClassName('card-header')
for(let i = 0; i < headerCollapseEl.length; i++ ) {
    headerCollapseEl[i].addEventListener('click', handleCollapse)
}

function handleCollapse() {
    //add class show for current .collapse
    const cardContentEl = this.nextElementSibling
    if (cardContentEl.clientHeight) {
        cardContentEl.style.height = 0;
    } else {
        const cardBodyEl = cardContentEl.children[0]
        cardContentEl.style.height = `${cardBodyEl.clientHeight}px`
    }

    const siblingsEl = getSiblings(this)
    for (let i = 0; i < siblingsEl.length; i++) {
        siblingsEl[i].style.height = 0;
    }
}

function getSiblings(e) { //e = .card-header
    let siblings = []
    // if no parent, return no sibling
    if(!e.parentElement && !e.parentElement.parentElement) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentElement.parentElement.children[0]; //.card 

    while(sibling) {
        const cardHeaderEl = sibling.children[0]; //.card-header
        if (cardHeaderEl !== e) {
            const cardContent = sibling.children[1]; //.collapse la nextSibling cua .card-header
            siblings.push(cardContent);
        }
        sibling = sibling.nextElementSibling;
    }
    return siblings
}

// Handle Tabs Section
const navItemEl = document.getElementsByClassName('nav-item')
for(let i = 0; i < navItemEl.length; i++ ) {
    navItemEl[i].addEventListener('click', handleOpenTabs)
}
function getSiblingsOfTabs(e) { //e = .nav-item
    let siblings = []
    // if no parent, return no sibling
    if(!e.parentElement) { //e = .tab-nav
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentElement.children[0]; //.nav-item[0]

    while(sibling) {
        if (sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextElementSibling;
    }
    return siblings
}
function handleOpenTabs() {
    //siblings of nav-item
    const siblingsNavItemEl = getSiblingsOfTabs(this)
    for (let i = 0; i < siblingsNavItemEl.length; i++) {
        siblingsNavItemEl[i].classList.remove('active')
    }
    
    //add .active cho current .nav-item
    this.classList.add('active')

    //get attribute data-content-id array
    const navItemEl = this.getAttribute('data-content-id')

    //get tabPane getElementById() (1)
    const activeTabPaneEl = document.getElementById(navItemEl) 

    //add class show (1)
    activeTabPaneEl.classList.add('show')

    //remove show cho cac siblings cua activeTabPane
    const siblingsTabPaneEl = getSiblingsOfTabs(activeTabPaneEl)
    for(let i = 0; i < siblingsTabPaneEl.length; i++) {
        siblingsTabPaneEl[i].classList.remove('show')
    }
}
// handle btn menu on nav
// const menuBtn = document.getElementById("btn-menu-id");
// menuBtn.addEventListener('click', handleShowNavWrap)
// function handleShowNavWrap() {
//     const navWrap =  document.getElementsByClassName('nav-wrap')
//     navWrap[0].classList.toggle('display-nav-block')
// }

const menuBtn = document.getElementById("btn-menu-id");
menuBtn.addEventListener('click', handleShowNavWrap)
function handleShowNavWrap() {
    const navWrap =  document.getElementsByClassName('nav-wrap')[0]
    if (navWrap.clientHeight) {
        navWrap.style.height = 0;
    } else {
        const numberChildren = navWrap.children.length
        const sumOfHeightNavChildren = navWrap.children[0].clientHeight*numberChildren
        navWrap.style.height = `${sumOfHeightNavChildren}px`
    }
}

// click vao .dropdown
const dropdownEl = document.getElementsByClassName('dropdown')[0]
const menuEl = dropdownEl.children[2]
const menuItems = menuEl.children
const textEl =dropdownEl.children[1]
textEl.addEventListener('click', handleDropdown)
// -> toggle .hidden cho .menu | toggle cho icon xoay xuong/len

function handleDropdown() {
    menuEl.classList.toggle('hidden')
    dropdownEl.classList.toggle('dropdown-no-boder-bottom')
}
// click vao tung item: query all items -> get data-value, text cua current item -> gan vao .text
//add .hidden vao .menu va remove class .transition cho icon
for(let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', handleClickMenuItem)
}
function handleClickMenuItem(e) {
    textEl.innerHTML = this.innerHTML
    textEl.setAttribute('data-value', this.getAttribute('data-value'))
    menuEl.classList.add('hidden')
    dropdownEl.classList.remove('dropdown-no-boder-bottom')
}

// handleFormSubmit
const btnSend = document.getElementsByClassName('btn-send')[0];
btnSend.addEventListener('click', handleModalFormContact)

function setValueForm (id) {
    document.querySelectorAll(`[data-content=${id}]`)[0].innerHTML = document.getElementById(id).value
} 

function handleModalFormContact() {
    const modalFormEl = document.getElementById('modalFormContact')
    modalFormEl.classList.add('display-block');
    setValueForm('nameInput');
    setValueForm('emailInput');
    setValueForm('phoneInput');
    setValueForm('messageInput');
    handleBackgroundModal();
}

const crossCloseEls = document.getElementsByClassName('btn-close');
for(let i = 0; i < crossCloseEls.length; i++)
{
    crossCloseEls[i].addEventListener('click', handleCloseModal)
}
function handleCloseModal() {
    const parentEl = this.parentElement
    parentEl.classList.remove('display-block')
    document.body.classList.remove('open-modal')
    document.getElementsByClassName('modal-container')[0].remove()
}
function handleBackgroundModal() {
    let modalContainerEl = document.createElement("DIV");   // Create a <div> element
    modalContainerEl.classList.add('modal-container') // add class 'modal-continer' in css to DIV el
    document.body.appendChild(modalContainerEl); //append modalContainerEl as the last node in body
    document.body.classList.add('open-modal') // add open-modal class to body
}

