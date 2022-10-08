console.log('verificador de idade')



function contar(){
    let inicio = document.getElementById('txt-inicio')
    let fim = document.getElementById('txt-fim')
    let passo = document.getElementById('txt-passo')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO]. Faltam dados")
    }else {
        res.innerHTML = `Contando`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)    
        //contagem aumentativa
        if (i < f){
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f3C3}`
            }
        //contagem regressiva
        }else{
            for(var c = i; c >= f; c -= p)
            res.innerHTML += ` ${c} \u{1f6a3}` 
        }   
        
        res.innerHTML += `\u{1f3c1}`

    }

}

