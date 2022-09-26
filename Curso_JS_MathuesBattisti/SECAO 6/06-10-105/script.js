// Chamando a recurssão numero par ou impar

function recurssao(n) {
    if (n - 1 < 2) {
        console.log("Recursão parou")
    } else if (n % 2 != 0) {
        console.log("Numero impar " + n)
        recurssao(n - 1)
    } else {
        console.log("Número par" + n)
        recurssao(n - 2);
    }
}

recurssao(10);
recurssao(10);
recurssao(55);