//Pop remove sempre remove o último elemento
let pessoas = ["MATHUES", "Maria", 'Weverton', "Daniel"]
let pessoaAdicionada = pessoas
pessoaAdicionada.unshift('LucasAdicionado')
console.log(pessoaAdicionada)


removerPrimeiraPessoa = pessoas.shift()

console.log(removerPrimeiraPessoa)
console.log(pessoas)