function verificar() {
    let v_data = new Date();
    let v_ano = v_data.getFullYear(); //ano atual
    let v_idade = window.document.getElementById('txtano'); //input do ano de nascimento
    let v_res = document.getElementById('res')

    if (v_idade.value.length == 0 || v_idade.value > v_ano) {
        window.alert("[ERRO]. Insira um valor valido!")
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = v_ano - Number(v_idade.value)
        let genero = " "
        

        if (fsex[0].checked) {
            genero = "Homem"
        } else if (idade >= 0 && idade <= 10) {
            //criança
        } else if (idade <21) {
            //jovem
        } else if (idade >21 && idade <=50) {
            //adulto
        } 
        
        
        else if (fsex[1].checked) {
            genero = "Mulher"
        }
        res.innerHTML = ` ${genero} de idade calculada: ${idade}`
    }

}