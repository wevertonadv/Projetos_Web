let num = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;



function imprimirNumeros (...args) {
    for(let i = 0; i <args.length; i++) {
        console.log(args[i]);
    }
}

imprimirNumeros(num,num2,num3)
console.log('Pausa')
imprimirNumeros(num2,num3)
console.log('Pausa')
imprimirNumeros(2,5,4,7,8,9,5,6,74,8,59,1,2,0)
