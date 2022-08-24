let numeroIngresado = parseInt(prompt("Ingresar numero a dividir del 1 al 100"));
let divicion = 0;

console.log("******************************");
console.log("Resultados de la divicion del " + numeroIngresado + " del 1 al 100");
console.log("******************************");
for (let dividendo = 1; dividendo <= 100; dividendo++){
    divicion = 0;
    divicion = numeroIngresado / dividendo;
    console.log(`${numeroIngresado} / ${dividendo} = ${divicion}`);
}

alert("Para visualizar la tabla debe abrir la consola");