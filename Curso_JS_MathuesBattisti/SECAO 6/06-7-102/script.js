function soma(a,b){
    if(a===undefined || b===undefined){
        console.log('Esta função precisa de dois argumentos.');
    }else{
        return a + b;
    }
}
// se tiver um argumento só aparece a mensagem
soma(1)

// se tiver dois argumento ele soma
console.log(soma(1,2))

function saudacao(nome, idade){
    if(nome === undefined){
        console.log("Olá " + nome);
    }else{
        console.log("Olá " + nome + " você tem " + idade + " anos")
    }
}

// se tiver um argumento só aparece a mensagem
saudacao("Daniel")

// se tiver dois argumento ele soma
saudacao("weverton", 25)
