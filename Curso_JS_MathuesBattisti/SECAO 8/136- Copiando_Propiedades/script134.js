let carro = {
    portas:2,
    pneus:4,
    teto_solar:"Não"
}

let adicional = {
    portas:4,
    teto_solar: "Sim",
    arcondicionado: true
}

console.log(carro);

Object.assign(carro,adicional)

console.log(carro)