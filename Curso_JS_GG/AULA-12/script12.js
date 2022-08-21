//Sistema de votação no Brasil!
let idade = 10
if (idade >= 18) {
    console.log(`Voce tem ${idade} anos. Voto Obrigatório`)
} else {
    if (idade >= 16) {
        console.log(`Com ${idade} anos. Voto Opcional`)
    } else {
        console.log(`Voce é menor de idade. Não pode votar`)
    }
}