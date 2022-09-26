function tipoDeDado() {
    console.log('Esse dado é', typeof 42)
    console.log('Esse dado é', typeof 'mae');
    console.log('Esse dado é', typeof true)
}

tipoDeDado('esse dado é ')

function vericiarDado(dado) {

    if (typeof dado === 'string') {
        console.log('Este dado é uma string')

    } else if (typeof dado === 'number') {
        console.log('Este dado é um number')

    } else if (typeof dado === 'boolean') {
        console.log('Este dado é um boolean')

    }
}
vericiarDado(5)
vericiarDado(false)
vericiarDado("Weverton")
vericiarDado()