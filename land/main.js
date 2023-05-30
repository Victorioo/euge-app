let bar = document.querySelector(".bi-list");

let linksContainer = document.querySelector(".links-container")

bar.addEventListener("click", ()=> {
    linksContainer.classList.toggle("links-container-pressed")
    bar.classList.toggle("bar-pressed")
})

let contenedorNombre = document.getElementById("container-nombre")

let nombre = localStorage.getItem("nombre")

contenedorNombre.textContent = nombre
