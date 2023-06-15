let sex = document.getElementById("sex")
let down = document.getElementById("down")
let up = document.getElementById("up")
let one = document.getElementById("one")
let two = document.getElementById("two")
let bg = document.getElementById("bg")
let nl = document.getElementById("nl")
let nv = document.getElementById("nv")
let lg= document.getElementById("lg")
let r = document.getElementById("r")
let tt = document.getElementById("tt")

down.onclick = function(){
    down.classList.toggle("fa-caret-down")
    down.classList.toggle("fa-caret-up")
    one.classList.toggle("op")
    two.classList.toggle("op")
}
one.onclick = function(){
    sex.innerHTML = "female"
    down.classList.toggle("fa-caret-down")
    down.classList.toggle("fa-caret-up")
    one.classList.remove("op")
    two.classList.remove("op")
}
two.onclick = function(){
    sex.innerHTML = "male"
    down.classList.toggle("fa-caret-down")
    down.classList.toggle("fa-caret-up")
    one.classList.remove("op")
    two.classList.remove("op")
}
bg.onclick = function(){
    nl.classList.toggle("opp")
    nv.classList.toggle("oppa")
    lg.classList.toggle("nn")
    r.classList.toggle("nn")
    tt.classList.toggle("nn")
}
