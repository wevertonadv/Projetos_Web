function multiplicarTresNumeros(x,y,z) {
    return x * y * z
}

console.log(multiplicarTresNumeros(10,10,1));

/**************************************************************** */
const mult = multiplicarTresNumeros(2,2,2);
    
console.log("O Valor do mult é " + mult)

/**************************************************************** */

function podeDirigir(idade,cnh){
    if(idade >=18 && cnh == true)
        console.log("Pode dirigir")
    else{
        console.log("Não pode dirigit")
    }
}


console.log(podeDirigir(19, true))
console.log(podeDirigir(17, true))
console.log(podeDirigir(19, false))
console.log(podeDirigir(17, false))