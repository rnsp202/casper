const gnb = document.querySelectorAll(".gnb > li")
const nav_bg = document.querySelector(".nav_bg")
const lnb = document.querySelectorAll(".lnb")
for(let i of lnb) {i.style.height = "0px"}
gnb.forEach((i, j) => {
    i.addEventListener("mouseover", () => {
        nav_bg.style.height = "240px"
        for(let i of lnb) {i.style.height = "225px"}
    })
    nav_bg.addEventListener("mouseout", () => {
        nav_bg.style.height = "0px"
        for(let i of lnb) {i.style.height = "0px"}
    })
    lnb[j].addEventListener("mouseout", () => {
        nav_bg.style.height = "0px"
        for(let i of lnb) {i.style.height = "0px"}
    })
})