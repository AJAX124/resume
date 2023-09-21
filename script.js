var cursor = document.querySelector("#cursor");
var content = document.querySelector("#ctr-cnt")
var nav = document.querySelector("#nav-2 a")
var nava = document.querySelector("#fi")
var navb = document.querySelector("#se")

window.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
        x: dets.clientX,
        y: dets.clientY,
        duration:.3,
        ease:Expo
    })
})

content.addEventListener("mouseenter",()=>{
    gsap.to(cursor, {
         scale:4
    })
})

content.addEventListener("mouseleave",()=>{
    gsap.to(cursor, {
         scale:1
    })
})

nav.addEventListener("mouseenter",()=>{
    gsap.to(cursor, {
         scale:5,
    })
})

nava.addEventListener("mouseleave",()=>{
    gsap.to(cursor, {
         scale:1
    })
})
nava.addEventListener("mouseenter",()=>{
    gsap.to(cursor, {
         scale:5
    })
})

navb.addEventListener("mouseleave",()=>{
    gsap.to(cursor, {
         scale:1
    })
})
navb.addEventListener("mouseenter",()=>{
    gsap.to(cursor, {
         scale:5
    })
})

nav.addEventListener("mouseleave",()=>{
    gsap.to(cursor, {
         scale:1
    })
})



function on() {
    var navbar = document.getElementById("nav-2");
    var responsive_class_name = 'responsive'
    navbar.classList.toggle(responsive_class_name)
}

