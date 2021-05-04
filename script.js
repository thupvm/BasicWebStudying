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

// handleFormSubmit
const btnSend = document.getElementsByClassName('btn-send')[0];
btnSend.addEventListener('click', handleModalFormContact)

function setValueForm (id) {
    document.querySelectorAll(`[data-content=${id}]`)[0].innerHTML = document.getElementById(id).value

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
}
