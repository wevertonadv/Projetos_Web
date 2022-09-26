//Faça uma estrutura if/else para verificar se um usuário pode dirigir;

 let nome = "Weveron"
 let idade = 15
 var cnh = "sim"

 if (idade >= 18 && cnh == "sim") {
    console.log(`${nome} você tem ${idade} anos, e voce tem CNH. Pode dirigir`)
 } else if ( idade > 18 && cnh == "nao") {
    console.log(`${nome} você tem ${idade} anos, mas você não tem cnh. Não Pode dirigir`)
 } else if ( idade <18 && cnh == "nao" || cnh == "sim"){
    console.log(`${nome} você é de menor tem ${idade} anos. Não pode ter cnh`)

 }

