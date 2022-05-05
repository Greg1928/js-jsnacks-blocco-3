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
cleanEven = even.filter(function (){
    return true
});
cleanOdd = odd.filter(function (){
    return true
});
console.log(x);
console.log("even " + cleanEven);
console.log("odd " + cleanOdd);

document.getElementById("red").innerHTML = cleanOdd;
document.getElementById("green").innerHTML = cleanEven;
