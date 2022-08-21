//Faça um script de bom ou boa tarde ou boa noite e boa madruga

var agora = new Date()
var hora = agora.getHours

console.log(`Agora são extamente ${hora} horas`)
if (hora >= 6 && hora < 12) {
    console.log("Boa dia!")

} else if (hora > 12 && hora <= 18) {
    console.log("Boa tarde!")

} else if (hora > 18 && hora <= 23) {
    console.log("Boa Noite!")
    console.log("Boa Madrugada!")

} else {
    console.log("Essa hora não existe")
}