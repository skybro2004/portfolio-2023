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