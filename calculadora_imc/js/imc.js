const calcular = document.getElementById('calcular');
const light = document.querySelector('dark.css')
function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        //classificaçâo
        let classificacao;

        if (valorIMC < 18.5) {
            classificacao = 'desnutrição. Procure ajuda médica o quanto antes.';
        } else if (valorIMC < 25) {
            classificacao = 'eutrofia. Parabéns!';
        } else if (valorIMC < 30) {
            classificacao = 'sobrepeso. Cuidado!';
        } else if (valorIMC < 35) {
            classificacao = 'obesidade grau I. Cuidado!';
        } else if (valorIMC < 40) {
            classificacao = 'obesidade Grau II (severa). Cuide-se!';
        } else {
            classificacao = 'obesidade Grau III (mórbida). Trate-se o quanto antes!';
        }
        
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está numa condição de ${classificacao}`;
    }

    else {
        resultado.textContent = 'Preencha todos os campos...';
    }
}


calcular.addEventListener('click', imc);

function clean() {
    nome.value = '';
    altura.value = '';
    peso.value = '';
    resultado.innerHTML = '';
}

function lightMode() {
    
}