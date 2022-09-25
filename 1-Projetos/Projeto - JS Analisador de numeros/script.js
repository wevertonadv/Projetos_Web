let num = document.getElementById('input-numero');
let lista = document.getElementById('input-lista');
let n1 = Number(num.value)
let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) !=-1){
        return true
    }else{
        return false
    }
}


function add(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ``
    }else{
        window.alert("Valroes invalido")
    }
    num.value = ''
    num.focus()
}


function finalizar(){
    if(valores.length == 0){
        window.alert("Adicione valores antes de finalizar")
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }if(valores[pos] < menor){
                menor = valores[pos]
            }
            media = soma / tot
            m = parseInt(media)
        }
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastros</p>`
        res.innerHTML += `<p>O maior valor é o ${maior}</p>`
        res.innerHTML += `<p>O menor valor é o ${menor} </p>`
        res.innerHTML += `<p>A soma dos valores é ${soma} </p>`
        res.innerHTML += `<p>A média dos valores é ${m} </p>`
    }
}

// 1 passo adicionar o numero na caixa de seleção (v)
// 4 permitir apenas de 1 até 100 (v)
// 2 passo não permirir duplicata (v)

// 3 a cada numero adicionado fica na caixa de seleção (v)

// 5 quando fianlizar mostrar a quantidade elementos cadastros
// 6 mostrar o maior valor informado
// 7 mostrar o menor valor informado
// 8 somatorio de todos os numeros
// 9 a média dos valores
// 10 quando digitar um novo numero sumir tudo menos as caixa de seleção

