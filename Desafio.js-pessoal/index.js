const inputSolution = document.querySelector('.solution');
const inputResult = document.querySelector('.result');
const botaoCalculate = document.querySelector('.operators, .container-numbers button')

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let valor = botao.textContent;

        if(valor === 'X') valor = '*';

        inputSolution.value += valor;
    });
});

botaoCalculate.addEventListener('click', () => {
    try{
        const espressao = inputSolution.value;
        const resultado = eval(espressao);
        inputResult.value = resultado;
    } catch (error) {
        inputResult.value = 'Erro';
    }
})