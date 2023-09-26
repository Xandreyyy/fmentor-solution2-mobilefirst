const liElements = document.querySelectorAll(".planets-menu .menu-item")
const moonItem = document.querySelectorAll(".planets-menu .menu-item")[0]
let activeElement

document.addEventListener("DOMContentLoaded", ()=>{
    activeElement = moonItem
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