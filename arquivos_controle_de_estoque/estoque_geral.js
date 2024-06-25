const btnLateral = document.querySelector("#btnMenu")
const menuLateral = document.querySelector("#menuLateral")
const btnsItensMenu = [...document.querySelectorAll(".menuItem")]
btnLateral.addEventListener("click",(evt)=>{
    menuLateral.classList.toggle("ocultar")
})
btnsItensMenu.map((el,i)=>{
    el.addEventListener("click",()=>{
        menuLateral.classList.add("ocultar")
    })
})