const typoElem = document.querySelector(".typo")
typoElem.addEventListener("animationstart", function(){
    setTimeout(function(){
        typoElem.innerHTML = "FULLSTACK"
    }, 1000)
})
console.log(typoElem.nextSibling);
typoElem.nextElementSibling.addEventListener("animationstart", function(){
    setTimeout(function(){
        console.log("asdf");
        typoElem.nextElementSibling.innerHTML = "PROGRAMMER"
    }, 1000)
})