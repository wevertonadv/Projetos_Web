
function clicou() {
   let n1 = Number(window.prompt("Digite um número: "));
   let n2 = Number(window.prompt("Digite outro número: "));
   let soma = n1 + n2
   resultado.innerHTML = `A soma entre ${n1} e ${n2} é <strong id="soma">${soma}</strong>`
}