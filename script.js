let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let qntTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qntTotalCerveja = cervejaPP(duracao) * adultos + cervejaPP(duracao)/2;
    let qntTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);

    console.log(qntTotalCarne);
    console.log(qntTotalCerveja);
    console.log(qntTotalBebidas);

    resultado.innerHTML = `<p>${qntTotalCarne/1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${qntTotalCerveja/1000}L de Cerveja</p>`
    resultado.innerHTML += `<p>${qntTotalBebidas/1000}L de Bebida</p>`
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}


function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}
