let x = [];
let even = [];
let odd = [];
for ( let i = 0; i<10; i++){
    x.push(Math.floor(Math.random() * 100) + 1);
    if ( x[i] % 2 === 0 ){
        even[i] = x[i];
    }else{
        odd[i] = x[i];
    }
}

console.log(even);
console.log(odd);

document.getElementById("red").innerHTML = odd;
document.getElementById("green").innerHTML = even;
