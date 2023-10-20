const liElements = document.querySelectorAll(".crew-menu .menu-item")
const firstItem = document.querySelectorAll(".crew-menu .menu-item")[0]

const crewRole = document.getElementById("crewRole")
const crewName = document.getElementById("crewName")
const crewDesc = document.getElementById("crewDesc")
const crewBg = document.getElementById("crewImg")

let activeElement, arrMembers

document.addEventListener("DOMContentLoaded", ()=>{
    activeElement = firstItem
    activeElement.classList.add("active")
    return activeElement
})

fetch("../data.json").then(response=>{
    return response.json()
    .then(jsonFile=>{
        return jsonFile.crew
    }).then(allMembers=>{
        arrMembers = allMembers.map(member=>{
            return {
                role: member.role,
                name: member.name,
                desc: member.bio,
                bg: member.images.png
            }
        })
    })
})

liElements.forEach(el => {
    el.addEventListener("click", ()=>{
        let dataValue = el.dataset.crew
        arrMembers.forEach(member=>{
            if (dataValue === member.role){
                injectInHTML(member.role, member.name, member.desc, member.bg)
            }
        })

        if(el !== activeElement){
            activeElement.classList.remove("active")
        }
        activeElement = el
        activeElement.classList.add("active")
        return dataValue
    })
})

function injectInHTML(role, name, desc, bg) {
    crewRole.innerText = `${role}`
    crewName.innerText = `${name}`
    crewDesc.innerText = `${desc}`
    crewBg.src = `${bg}`
}