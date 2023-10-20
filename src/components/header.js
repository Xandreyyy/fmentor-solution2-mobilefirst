document.addEventListener("DOMContentLoaded", () =>{
    function checkWidth() {
        if (window.innerWidth <= 600){
            return true
        }else{
            return false
        }
    }

    class Header extends HTMLElement{
        constructor(){
            super()
            this.build()
            this.toggleClasses()
            this.applyNavBorder()
        }

        build(){
            const shwRoot = this.attachShadow({mode: "open"})

            shwRoot.appendChild(this.structure())
            shwRoot.appendChild(this.style())
        }

        structure(){
            const header = document.createElement('header')
            header.classList.add("container")
            header.innerHTML = `
            <div id="iconsWrapper">
                <a href="../../index.html"><img src="../../assets/shared/logo.svg" alt="Logo"/></a>
                <img class="burger-menu" id="burgerMenu_toopen" src="../../assets/shared/icon-hamburger.svg"/>
                <img class="burger-menu" id="burgerMenu_toclose" src="../../assets/shared/icon-close.svg"/>
            </div>
            <nav>
                <ul id="burgerList">
                    <li><a class="nav-link" href="../../index.html"><span class="nav-index">00</span> HOME</a></li>
                    <li><a class="nav-link" href="/html/destination.html"><span class="nav-index">01</span> DESTINATION</a></li>
                    <li><a class="nav-link" href="/html/crew.html"><span class="nav-index">02</span> CREW</a></li>
                    <li><a class="nav-link" href="/html/technology.html"><span class="nav-index">03</span> TECHNOLOGY</a></li>
                </ul>
            </nav>
            `
            return header
        }

        style(){
            const style = document.createElement('style')
            style.innerText = `@import '../build/headerStyles.css'`
            return style
        }

        toggleClasses(){
            const burgers = this.shadowRoot.querySelectorAll(".burger-menu")
            const menuItems = this.shadowRoot.querySelector("header nav")
            const burgerToOpen = this.shadowRoot.getElementById("burgerMenu_toopen")
            const burgerToClose = this.shadowRoot.getElementById("burgerMenu_toclose")

            burgers.forEach(el =>{
                el.addEventListener("click", () =>{
                    menuItems.classList.contains("disappear") ? menuItems.classList.remove("disappear") : null

                    if (!menuItems.classList.contains("appear")){
                        menuItems.classList.toggle("appear")
                        iconToClose()
                    }else{
                        menuItems.classList.toggle("appear")
                        menuItems.classList.add("disappear")
                        iconToOpen()
                    }
                })
            })

            function iconToClose() {
                burgerToClose.style.display = "block"
                burgerToOpen.style.display = "none"
            }

            function iconToOpen() {
                burgerToOpen.style.display = "block"
                burgerToClose.style.display = "none"
            }

            checkWidth() ? menuItems.classList.add('offcanvas') : null
            window.addEventListener('resize', () =>{
                let isMobile
                this.applyNavBorder(isMobile)
                if (window.innerWidth <= 600){
                    isMobile = true
                    menuItems.classList.add('offcanvas')
                    burgers.forEach((el) =>{
                        if(el.id === "burgerMenu_toclose"){
                            el.style.display = "none"
                        }else{
                            el.style.display = "block"
                        }
                    })
                }else{
                    isMobile = false
                    menuItems.classList.remove('offcanvas')
                    burgers.forEach((el) =>{
                        el.style.display = "none"
                    })
                }
            }, true)
        }

        applyNavBorder(isMobile = checkWidth()){
            const liElements = this.shadowRoot.querySelectorAll("#burgerList li")
            const currentURL = window.location.href
            const homeURL = currentURL.slice(22)

            if(!isMobile){
                liElements.forEach(el => {
                    let hrefChild = el.querySelector("a").href
                    if(currentURL === hrefChild && window.innerWidth >= 992){
                        el.classList.add("active")
                    }else if(homeURL === ""){
                        liElements[0].classList.add("active")
                    }else{
                        el.classList.remove("active")
                    }
                })
            }
        }
    }
    customElements.define('custom-header', Header)
})