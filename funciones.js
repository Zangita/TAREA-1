const numero1= 20;
const numero2= 10;

let resultado;

//suma
resultado = numero1 + numero2;
console.log(resultado);

//resta
resultado = numero1 - numero2;
console.log(resultado);

//dividir
resultado = numero1 / numero2;
console.log(resultado);

//multiplicar
resultado = numero1 * numero2;
console.log(resultado);

//modulo
resultado = numero1 % numero2;

console.log(resultado);

//Verificacion de numero primo
let numeroPrimo = 15; //Aqui es donde se agrega el numero que se desea verificar

let esNumeroPrimo = true;

for(let i = 2; i < numeroPrimo / 2; i++) {
    if(numeroPrimo % i === 0) {
        esNumeroPrimo = false;
    }
}

if(esNumeroPrimo) {
    console.log(`El numero ${numeroPrimo} es primo`);
} else {
    console.log(`El numero ${numeroPrimo} no es primo`);
}