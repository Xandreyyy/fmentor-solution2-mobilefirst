const liElements = document.querySelectorAll(".crew-menu .menu-item")
const commanderItem = document.querySelectorAll(".crew-menu .menu-item")[0]

let activeElement

document.addEventListener("DOMContentLoaded", ()=>{
    activeElement = commanderItem
    activeElement.classList.add("active")
    return activeElement
})

liElements.forEach(el => {
    el.addEventListener("click", ()=>{
        if(el !== activeElement){
            activeElement.classList.remove("active")
        }
        activeElement = el
        activeElement.classList.add("active")
    })
})