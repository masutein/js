let numeroIngresado = parseInt(prompt("Ingresar numero para generar tabla"));
let multiplicacion = 0;

console.log("******************************");
console.log("Tabla del " + numeroIngresado);
console.log("******************************");
for (let index = 1; index <= 10; index++){
    multiplicacion = 0;
    multiplicacion = numeroIngresado * index;
    console.log(`${numeroIngresado} * ${index} = ${multiplicacion}`);
}

alert("Para visualizar la tabla debe abrir la consola");