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
    console.log(elem);

    elem.addEventListener("click", (e) => {
        console.log(e);
        elem.children[2].classList.toggle("show")
    })

    elem.addEventListener("blur", (e) => {
        console.log(e);
        elem.children[2].classList.remove("show")
    })
}