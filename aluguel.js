let carro;
let dias;
let kmTotal;
let valTotal;


carro = (prompt("Para carro popular, digite P e para carro de luxo digite L"));
dias = parseInt(prompt("Por quantos dias o carro foi utilizado?"));
kmTotal = parseFloat(prompt("Quantos km foram percorridos?"));

// isNan verifica se as variáveis dias e km totais foram digitadas como número, caso contrário vai exibir uma mensagem para que o usuário analise as informações que foram dadas ao programa.
if (isNaN(dias) || isNaN(kmTotal)) {
    alert("Verifique os dados digitados e tente novemente!");
} else {
    if (carro == "P") {
// Verifica se o carro é popular, caso seja irá executar a linha do código abaixo de acordo com as condições de kilometragem e será realizada o cálculo através dos dados que o usuário forneceu
        if (kmTotal <= 100) {
            valTotal = (kmTotal * 0.2) + (dias * 90);
            alert(`O valor percorrido no intervalo de até 100km é: ,${valTotal}`);
        } else if (kmTotal >= 100) {
            valTotal = (kmTotal * 0.1) + (dias * 90);
            alert(`O valor percorrido no intervalo acima 100km é: , ${valTotal}`);
        }
    } else if (carro == "L") {
        // Verifica se o carro é de luxo, caso seja irá executar a linha do código abaixo de acordo com as condições de kilometragem e será realizada o cálculo através dos dados que o usuário forneceu
        if (kmTotal <= 200) {
            valTotal = (kmTotal * 0.3) + (dias * 150);
            alert(`O valor percorrido no intervalo de até 200km é: , ${valTotal}`);
        } else {
            valTotal = (kmTotal * 0.25) + (dias * 150);
            alert(`O valor percorrido no intervalo acima 200km é: , ${valTotal}`);
        }

    }
}