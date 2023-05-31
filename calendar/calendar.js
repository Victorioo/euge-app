// Bienvenida en el welcome del calendario

let nombreBienvenida = document.getElementById("nombre")
let nombreLocal = localStorage.getItem("nombre")
console.log(nombreLocal)

nombreBienvenida.textContent = `${nombreLocal}`

let articulo = document.getElementById("articulo");
let articuloLocal = localStorage.getItem("genero")

if (articuloLocal == "femenino"){
    articulo.textContent = "a"
} else if (articuloLocal == "masculino") {
    articulo.textContent = "o"
} else {
    articulo.textContent = "@"
}

// Función para obtener el estado de las celdas desde el almacenamiento local
function obtenerEstadoCeldas() {
    var estadoCeldas = localStorage.getItem("estadoCeldas");
    if (estadoCeldas) {
      return JSON.parse(estadoCeldas);
    } else {
      return {};
    }
  }
  
  // Función para guardar el estado de las celdas en el almacenamiento local
  function guardarEstadoCeldas(estadoCeldas) {
    localStorage.setItem("estadoCeldas", JSON.stringify(estadoCeldas));
  }
  
  // Función para cargar el estado de las celdas al iniciar la página
  function cargarEstadoCeldas() {
    var estadoCeldas = obtenerEstadoCeldas();
  
    // Recorrer todas las celdas y restaurar su estado y color
    var celdas = document.getElementsByClassName("table-date");
    for (var i = 0; i < celdas.length; i++) {
      var celda = celdas[i];
      var id = celda.id;
      if (estadoCeldas.hasOwnProperty(id)) {
        var estado = estadoCeldas[id];
        celda.textContent = estado.texto;
        celda.style.backgroundColor = estado.color;
      }
    }
  }
  
  // Función para manejar el evento de hacer clic en una celda
  function entrenando(celda) {
    var estadoCeldas = obtenerEstadoCeldas();
    var id = celda.id;
    if (!isNaN(celda.textContent) || celda.textContent == "-") {
      celda.textContent = "Sí";
      celda.style.backgroundColor = "green";
      estadoCeldas[id] = { texto: "Sí", color: "green" };
    } else if (celda.textContent == "Sí") {
      celda.textContent = "No";
      celda.style.backgroundColor = "rgb(161, 45, 45)";
      estadoCeldas[id] = { texto: "No", color: "rgb(161, 45, 45)" };
  
    } else if (celda.textContent == "No") {
      celda.textContent = "-";
      celda.style.backgroundColor = "rgb(80, 79, 79)";
      delete estadoCeldas[id];
    }
    guardarEstadoCeldas(estadoCeldas);
  }
  
  // Cargar el estado de las celdas al iniciar la página
  cargarEstadoCeldas();