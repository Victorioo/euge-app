let bar = document.querySelector(".bi-list");

let linksContainer = document.querySelector(".links-container")

bar.addEventListener("click", ()=> {
    linksContainer.classList.toggle("links-container-pressed")
    bar.classList.toggle("bar-pressed")
})