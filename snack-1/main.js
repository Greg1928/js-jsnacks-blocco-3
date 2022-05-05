let x = [];
let somma = 0;

while ( somma < 49 ){
    let numero = Number(prompt('Inserisci un numero'));
    x.push(numero);
    somma = somma + numero; 
}
console.log(x);
console.log(somma);
