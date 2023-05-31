// funcion abrir menú

let bar = document.querySelector(".bi-list");

let linksContainer = document.querySelector(".links-container")

bar.addEventListener("click", ()=> {
    linksContainer.classList.toggle("links-container-pressed")
    bar.classList.toggle("bar-pressed")
})

// Función que pone tu nombre en la bienvenida

let contenedorNombre = document.getElementById("container-nombre")

let nombre = localStorage.getItem("nombre")

contenedorNombre.textContent = nombre

// Función que te pone el sexo adecuado. BienvenidA o BienvenidO

let generoText = document.getElementById("genero")

let genero = localStorage.getItem('genero')

if (genero == "masculino"){
    generoText.textContent = "o"
} else if (genero == "femenino") {
    generoText.TextContent = "a"
} else {
    genero.textContent = "@"
}

console.log(`Nombre: ${nombre}`)
console.log(`Genero: ${genero}`)