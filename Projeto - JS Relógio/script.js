
function atualizarRelogio(){

    var display = document.querySelector('.display')

    var agora = new Date(); /*Termina com () porque é uma função.*/

    var horario = corrigirHorario(agora.getHours()) + " : " + corrigirHorario(agora.getMinutes()) + " : " + corrigirHorario(agora.getSeconds()); // aqqui eu estou concatenado horas minutos e segundos

    display.textContent = horario; /* Aqui eu estou pegando a variavel display e jogando o conteudo do horario*/
}

function corrigirHorario(numero){
    if (numero < 10) {
        numero = "0" + numero;
    }
    return numero;
}
atualizarRelogio(); // chamei a função aqui para atualizar mais rapido os minutos
setInterval(atualizarRelogio, 1000);

console.log(horario);

