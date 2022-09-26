//Faça um programa que verifica se o numero é primo ou não

num.window.prompt("digite um número")
const isPrime = (num) => {
 for(let i = 2; i < num; i++)
 if(num % i === 0){
  return false;
 }
 return num > 1;
}

numero = window.prompt("Digite um número")

if(numero / numero && numero == 1){
  window.alert("Número primo")
}else{
  window.alert("Seu numero não é primo")
}


function primo(){
  let numero = parseInt(document.getElementById('num').value);
  let resposta = document.getElementById('resposta');
  let divisores = 0;

  for(let count=1; count<=numero; count++){
    if(numero % count == 0) {
      divisores++;

    }else if(divisores==2){
      resposta.innerHTML = `O numero é primo`
        
    }else{
      resposta.innerHTML = `Não é primo`
    }
  }
}
