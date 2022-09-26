// ESCREVA UMA FUNÇÃO QUE RECEBE A IDADE DE UMA PESSOA;
// SE ELA TEM MAIS DE 18 ANOS ELA PODE ENTRRAR NA AUTO ESCOLA, IMPRIMA UMA MENSAGEM INFORMANDO ISSO
// SE ELA TEM MENOS, ELA NÃO POE, IMPRIMA OUTRA MENSAGEM COMO ESTE AVISO;
//EXECUTE A FUNÇÃO NOS DOIS CASOS;

function idade(age){
    if(age >=18 ){
        console.log("Você pode dirigir")
    }else
        console.log("Você não pode dirigir")
       
}

console.log(idade(10));
console.log(idade(18));
console.log(idade(30));