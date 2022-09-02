function media(){
  let nome = window.prompt("Qual é o nome do aluno: ");
  let nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}? `));
  let nota2 = Number(window.prompt(`Qual foi a segunda nota de ${nome} `));
  resultado.innerHTML = `Calculado a média final de<span class="amarelo"> ${nome}</span>`
  resultado2.innerHTML = `As notas obtidas foram <span class="amarelo">${nota1} e ${nota2}</span> `
  resultado3.innerHTML = `A média final foi <span class="amarelo">${(nota1 + nota2) / 2}</span>`

}