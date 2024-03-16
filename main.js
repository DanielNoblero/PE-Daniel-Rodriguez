// Solicitar las notas al usuario
let nombre = prompt("Ingrese el nombre del alumno");
let his;
do{
    his = parseFloat(prompt("Ingrese la nota de Historia"));
    if(isNaN(his)){ 
        alert("No es un número");
    }
}while(isNaN(his));

let mat;
do{
    mat = parseFloat(prompt("Ingrese la nota de Matemática"));
    if(isNaN(mat)){ 
        alert("No es un número");
    }
}while(isNaN(mat)); // Aquí estaba el error tipográfico

let lengua;
do{
    lengua = parseFloat(prompt("Ingrese la nota de Lengua"));
    if(isNaN(lengua)){ 
        alert("No es un número");
    }
}while(isNaN(lengua));

let geo;
do{
    geo = parseFloat(prompt("Ingrese la nota de Geografía"));
    if(isNaN(geo)){ 
        alert("No es un número");
    }
}while(isNaN(geo));

let ingles;
do{
    ingles = parseFloat(prompt("Ingrese la nota de Inglés"));
    if(isNaN(ingles)){ 
        alert("No es un número");
    }
}while(isNaN(ingles));

// Función para calcular el promedio
function calcularPromedio(his, mat, lengua, geo, ingles) {
  return (his + mat + lengua + geo + ingles) / 5;
}

const resultado = calcularPromedio(his, mat, lengua, geo, ingles);

// Mostrar alerta
if (resultado >= 7) {
    alert("Aprobado con " + resultado);
  } else if (resultado <= 6) {
    alert("No aprobado con " + resultado);
  }

alert("El promedio del alumno " + nombre + " es: " + resultado);