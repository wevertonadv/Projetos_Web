// Quando mexo em um  automaticamente mexo em outro 
// criiando o mesmo objeto por isso que ta igual

let pessoa = {
    nome: "Matheus"
}

let pessoa2 = pessoa;
console.log(pessoa == pessoa2);


pessoa2.nome = "Weverton"
console.log(pessoa.nome)


pessoa.nome = "Daniel"
console.log(pessoa2.nome)