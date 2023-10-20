const liElements = document.querySelectorAll(".planets-menu .menu-item")
const firstItem = document.querySelectorAll(".planets-menu .menu-item")[0]

const planetImg = document.getElementById("planetImg")
const planetTitle = document.getElementById("planetName")
const planetDesc = document.getElementById("planetDesc")
const planetDistance = document.getElementById("avgDistance")
const planetTravel = document.getElementById("travelTime")

let activeElement, arrDestinations

document.addEventListener("DOMContentLoaded", ()=>{
    activeElement = firstItem
    activeElement.classList.add("active")
    return activeElement
})

fetch("../data.json")
    .then(response => {
        return response.json()
    .then(jsonFile =>{
        return jsonFile.destinations
    })
    .then(allDestinations =>{
        arrDestinations = allDestinations.map(el =>{
            return {
                name: el.name,
                bg: el.images.png,
                desc: el.description,
                distance: el.distance,
                travel: el.travel
            }
        })
    })
})

liElements.forEach(el => {
    el.addEventListener("click", ()=>{
        let dataValue = el.dataset.planet

        arrDestinations.forEach(obj => {
          if(obj.name === dataValue){
            displayHTML(obj.name, obj.bg, obj.desc, obj.distance, obj.travel)
          }
        })
        
        if(el !== activeElement){
            activeElement.classList.remove("active")
        }
        activeElement = el
        activeElement.classList.add("active")
    })
})

function displayHTML(title, bg, desc, dist, travel) {
    planetTitle.innerHTML = `${title}`
    planetImg.src = `${bg}`
    planetDesc.innerHTML = `${desc}`
    planetDistance.innerHTML = `${dist}`
    planetTravel.innerHTML = `${travel}`
}