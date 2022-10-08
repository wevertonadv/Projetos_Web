function carregar(){

    let horaAtual = window.document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    //let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    let dia = data.getDay()
    var hora = 18

    if ( hora >= 6 && hora <=11) {
        horaAtual.innerHTML = `<strong>Bom dia!</strong> São extamente ${hora}:${minutos}:${segundos} `
    }
    else if (hora >=12 && hora <=18){
        horaAtual.innerHTML = `<strong>Boa tarde!</strong> São extamente ${hora}:${minutos}:${segundos}.`
        img.src = 'tarde.png'
        document.body.style.background = '#9C974A';
    } 
    else {
        horaAtual.innerHTML = `<strong>Boa Noite!</strong> São extamente ${hora}:${minutos}:${segundos}`
        img.src = 'noite.png'
        document.body.style.background = 'black';
    }
   
    switch (dia) {
        case 0:
            dia.innerHTML = `Hoje é ${dia}`
            break
    }
}

