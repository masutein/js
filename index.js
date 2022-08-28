let numeroIngresado = parseInt(prompt("Ingresar numero a dividir del 1 al 100"));
let division = 0;

console.log("******************************");
console.log("Resultados de la division del " + numeroIngresado + " del 1 al 100");
console.log("******************************");
for (let dividendo = 1; dividendo <= 100; dividendo++){
    division = 0;
    division = numeroIngresado / dividendo;
    console.log(`${numeroIngresado} / ${dividendo} = ${division}`);
}

alert("Para visualizar la tabla debe abrir la consola");