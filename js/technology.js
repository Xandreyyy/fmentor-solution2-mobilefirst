const liElements = document.querySelectorAll(".tech-menu .menu-item")
const firstItem = document.querySelectorAll(".tech-menu .menu-item")[0]

const techTitle = document.getElementById("techName")
const techDesc = document.getElementById("techDesc")
const techImg = document.getElementById("techImg")

let activeElement, arrTech

document.addEventListener("DOMContentLoaded", ()=>{
    activeElement = firstItem
    activeElement.classList.add("active")
    return activeElement
})

fetch("../data.json")
    .then(response => {
        return response.json()
    .then(jsonFile =>{
        return jsonFile.technology
    })
    .then(allVehicles =>{
        arrTech = allVehicles.map(el =>{
            return {
                name: el.name,
                bg: el.images.portrait,
                desc: el.description
            }
        })
    })
})

liElements.forEach(el => {
    el.addEventListener("click", ()=>{
        let dataValue = el.dataset.tech

        arrTech.forEach(obj => {
          if(obj.name === dataValue){
            displayHTML(obj.name, obj.bg, obj.desc)
          }
        })
        
        if(el !== activeElement){
            activeElement.classList.remove("active")
        }
        activeElement = el
        activeElement.classList.add("active")
    })
})

function displayHTML(title, bg, desc) {
    techTitle.innerHTML = `${title}`
    techDesc.innerHTML = `${desc}`
    techImg.src = `${bg}`
}