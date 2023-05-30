function guardarValor() {
    // obtener el valor

    var nombre = document.getElementById("nombre").value;

    localStorage.setItem("nombre", nombre);
    
    // console.log

    console.log(`Guardado completo del nombre: ${nombre}`)

    if (nombre != null && nombre != ""){
        window.location.href = "./land/land.html";
    }
}