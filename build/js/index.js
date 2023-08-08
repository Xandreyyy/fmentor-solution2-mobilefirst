const burger = document.querySelectorAll(".burger-menu")
const menuItems = document.querySelector("header nav")
const burgerToOpen = document.getElementById("burgerMenu_toopen")
const burgerToClose = document.getElementById("burgerMenu_toclose")

burger.forEach(el =>{
    el.addEventListener("click", () =>{
        if (!menuItems.classList.contains("appear")){
            menuItems.classList.toggle("appear")
            burgerToClose.style.display = "block"
            burgerToOpen.style.display = "none"
        }else{
            menuItems.classList.toggle("appear")
            burgerToOpen.style.display = "block"
            burgerToClose.style.display = "none"
        }
    })
})