const typoElem = document.querySelector(".typo")
typoElem.addEventListener("animationstart", function(){
    setTimeout(function(){
        typoElem.innerHTML = "FULLSTACK"
    }, 1000)
})
typoElem.nextElementSibling.addEventListener("animationstart", function(){
    setTimeout(function(){
        typoElem.nextElementSibling.innerHTML = "PROGRAMMER"
    }, 1000)
})



// function dropdown(elem){
//     elem.children[2].classList.toggle("show")
// }

let dropdown = document.getElementsByClassName("btn-dropdown")

for(let elem of dropdown){
    elem.addEventListener("click", (e) => {
        elem.children[2].classList.toggle("show")
    })

    elem.addEventListener("blur", (e) => {
        if(e.relatedTarget==null || !e.relatedTarget.classList.contains("dropdown-menu")){
            elem.children[2].classList.remove("show")
        }
    })
}