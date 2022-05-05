let n = Number(prompt("Inserisci un numero"));
let i = 0;
do {
    let array = [];
    for (let x = 0; x < 10; x++){
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log(array);
    i++;
}while ( i < n );
