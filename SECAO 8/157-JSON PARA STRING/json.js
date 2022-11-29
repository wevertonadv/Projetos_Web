
let pessoa = {
    "modelo": "BMW",
    "rodas": 4,
    "portas": 2,
    "tipo": "Sedan",
    "valorPino": ["100,00", "500,00", "1000,00"]


}

// Tranformando tudo em string
let modeloTexto = JSON.stringify(pessoa);
console.log(modeloTexto)

// Tranformando tudo em JSON agora
let modeloJson = JSON.parse(modeloTexto);
console.log(modeloJson)

// Acesando o valor pino lembrando começa pelo 0
console.log(modeloJson.valorPino[0])
console.log(modeloJson.valorPino[1])
console.log(modeloJson.valorPino[2])