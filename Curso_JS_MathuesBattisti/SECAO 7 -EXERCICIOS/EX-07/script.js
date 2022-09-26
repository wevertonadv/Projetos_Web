function numeroPositivo(){
    console.log(Math.abs(-10))
    console.log(Math.abs(-2))
}

numeroPositivo()

function numeroPos(numeroNeg){
    return Math.abs(numeroNeg)
}

console.log(numeroPos(10))
console.log(numeroPos(-7))
console.log(numeroPos(-5.5))