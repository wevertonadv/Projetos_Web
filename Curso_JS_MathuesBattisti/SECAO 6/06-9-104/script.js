// lembra de números se o usuario não colcoar

function lembrarSoma(x){
    return function (y){
        return x + y;
    }
}
//******************************/
let soma1 = lembrarSoma(2);

console.log(soma1(5));
//***************************** */
let soma2 =lembrarSoma(10)

console.log(soma2(11))
//***************************** */
