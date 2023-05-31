function guardarValor() {
    // obtener el valor
    var nombre = document.getElementById("nombre").value;
    localStorage.setItem("nombre", nombre);

    console.log(`Guardado completo del nombre: ${nombre}`)

    if (nombre && nombre != ""){
        window.location.href = "./land/land.html";
    }

    var generoSeleccionado = document.querySelector('input[name="genero"]:checked').value;
    localStorage.setItem('genero', generoSeleccionado);
    console.log('Estado guardado', generoSeleccionado)
}
