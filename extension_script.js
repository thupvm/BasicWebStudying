//JAVASCRIPT DOCUMENT


// Slider
const sliderIndicatorList = document.getElementsByClassName('slider-indicators')
for (let i = 0; i < sliderIndicatorList.length; i++) {
    for (let j = 0; j < sliderIndicatorList[i].children.length; j++ ) {
        sliderIndicatorList[i].children[j].addEventListener('click', handleIndicator)
    }
}

function handleIndicator() {
    const sliderSectionEl = this.parentElement.parentElement
    const sliderInnerEl = sliderSectionEl.children[0]
    const dataNumberAttribute = this.getAttribute('data-number')

    const sliderItemEl = sliderInnerEl.children

    for (let i = 0; i < sliderItemEl.length; i++) {
        if ( parseInt(dataNumberAttribute) === i) {
            sliderItemEl[i].classList.add('active')
        } else {
            sliderItemEl[i].classList.remove('active')
        }
    }
}



// Tooltip
const tooltipObjectEl = document.getElementsByClassName('tooltip')
for (let i = 0; i < tooltipObjectEl.length; i++) {
    tooltipObjectEl[i] && tooltipObjectEl[i].addEventListener('mouseover', handleShowTooltip)
    tooltipObjectEl[i] && tooltipObjectEl[i].addEventListener('mouseout', handleHideTooltip)
}

function handleShowTooltip() {
    const popupEl = document.createElement("div")
    popupEl.classList.add('popup')
    const tooltipPosition = this.getAttribute('data-position')
    const tooltipContent = this.getAttribute('data-content')
    // cut string
    const subStringContentArray = tooltipPosition.split(' ')
    popupEl.innerHTML = tooltipContent
    popupEl.classList.add(subStringContentArray[0])
    popupEl.classList.add(subStringContentArray[1])

    const objectPostion = this.getBoundingClientRect()
    const topObj = objectPostion.top
    const leftObj = objectPostion.left
    const bottomObj = objectPostion.bottom
    const rightObj = objectPostion.right

    document.body.appendChild(popupEl)


    if (subStringContentArray[1] === 'left') {
        popupEl.style.left = leftObj + 'px'
    }
    if (subStringContentArray[1] === 'right') {
        popupEl.style.left = (rightObj - popupEl.offsetWidth) + 'px'
    }
    if (subStringContentArray[1] === 'center') {
        popupEl.style.left = (leftObj + (this.offsetWidth -  popupEl.offsetWidth)/2) + 'px'
    }
    if (subStringContentArray[0] === 'top') {
        popupEl.style.top = (topObj - popupEl.offsetHeight - 10) + 'px'
    }
    if (subStringContentArray[0] === 'bottom') {
        popupEl.style.top = (topObj + this.offsetHeight + 10) + 'px'
    }
    if (subStringContentArray[0] === 'right') {
        popupEl.style.top = (topObj + (this.offsetHeight - popupEl.offsetHeight)/2 ) + 'px'
        popupEl.style.left = rightObj + 10 + 'px'
    }   
    if (subStringContentArray[0] === 'left') {
        popupEl.style.top = (topObj + (this.offsetHeight - popupEl.offsetHeight)/2 ) + 'px'
        popupEl.style.left = (leftObj - popupEl.offsetWidth - 10) + 'px'
    }
}
function handleHideTooltip() {
    document.getElementsByClassName('popup')[0].remove()
    // popupEl.remove()
}



// click vao .dropdown-wrap
const dropdownEl = document.getElementsByClassName('dropdown-wrap')[0]
const menuEl = dropdownEl && dropdownEl.children[2]
const menuItems = menuEl && menuEl.children || []
const textEl = dropdownEl && dropdownEl.children[1]

textEl && textEl.addEventListener('click', handleDropdown)
// -> toggle .hidden cho .menu | toggle cho icon xoay xuong/len

function handleDropdown() {
    menuEl.classList.toggle('hidden')
    dropdownEl.classList.toggle('dropdown-no-boder-bottom')
}
// click vao tung item: query all items -> get data-value, text cua current item -> gan vao .text
//add .hidden vao .menu va remove class .transition cho icon
for(let i = 0; i < menuItems.length; i++) {
    menuItems[i] && menuItems[i].addEventListener('click', handleClickMenuItem)
}
function handleClickMenuItem(e) {
    textEl.innerHTML = this.innerHTML
    textEl.setAttribute('data-value', this.getAttribute('data-value'))
    menuEl.classList.add('hidden')
    dropdownEl.classList.remove('dropdown-no-boder-bottom')
}

// Handle Collapse
// Get current class is using height
const firstHeaderEl = document.getElementsByClassName('header')[0]
const firstBodyContentEl = firstHeaderEl && firstHeaderEl.nextElementSibling
const firstContentEl = firstBodyContentEl && firstBodyContentEl.children[0]
firstBodyContentEl && (firstBodyContentEl.style.height = `${firstContentEl.clientHeight}px`)

const headerEl = document.getElementsByClassName('header')
for(let i = 0; i < headerEl.length; i++ ) {
    headerEl[i].addEventListener('click', handleCollapse)
}

function handleCollapse() {
    //add .show for current .body-content
    const bodyContentEl = this.nextElementSibling
    if (bodyContentEl.clientHeight) {
        bodyContentEl.style.height = 0;
    } else {
        const contentEl = bodyContentEl.children[0]
        bodyContentEl.style.height = `${contentEl.clientHeight}px`
    }

    const siblingsEl = getSiblings(this)
    for (let i = 0; i < siblingsEl.length; i++) {
        siblingsEl[i].style.height = 0;
    }
}

function getSiblings(e) { //e = .header
    let siblings = []
    // if no parent, return no sibling
    if(!e.parentElement && !e.parentElement.parentElement) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentElement.parentElement.children[0]; //.card 

    while(sibling) {
        const headerEl = sibling.children[0]; //.header of sibling
        if (headerEl !== e) {
            const bodyContent = sibling.children[1]; //.body-content la nextSibling cua .header
            siblings.push(bodyContent);
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

