// Imprima só valores pares

for(let pa = 10; pa > 0; pa = pa - 1 ) { //sempre que o número for par cai no continue
    if( pa % 2 == 0) {
        console.log("Caiu no continue")
        continue;
    }
 console.log(pa)
}
console.log("****************************************")
let par = 0

while( par < 11) {
    par = par + 1;
    if(par % 2 == 0) {
        continue;
    }
    console.log(par)
    par = par + 1;
}