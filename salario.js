let genero;
let anos;
let salario;
let salNovo;

genero = prompt("Qual é o seu gênero?");
anos = parseInt(prompt("Quantos anos você trabalha na empresa?"));
salario = parseInt(prompt("Digite o seu salário atual:"));

console.log(genero);


// isNan verifica se as variáveis dias e km totais foram digitadas como número, caso contrário vai exibir uma mensagem para que o usuário analise as informações que foram dadas ao programa.
if (isNaN(anos) || isNaN(salario)) {
    alert("Verifique os dados digitados e tente novemente!");
} else {
    if (genero == "Mulher") {
        // Verifica se o gênero é uma mulher, caso seja irá executar a linha do código abaixo de acordo com as condições de quantos anos a funcionária está na empresa e será realizada o cálculo através do dado que o usuário forneceu que foi o salário atual e o dado fornecido pela empresa que será a porcentagem de aumento do salário atual.
        if (anos <= 5) {
            salNovo = salario * 1.04;
            alert(`O novo salário da funcionária é:, ${salNovo.toFixed(2)}`);
        } else if (anos >= 5 && anos <= 10) {
            salNovo = salario * 1.07;
            alert(`O novo salário da funcionária é:, ${salNovo.toFixed(2)}`);
        } else if (anos >= 15 && anos <= 20) {
            salNovo = salario * 1.12;
            alert(`O novo salário da funcionária é:, ${salNovo.toFixed(2)}`);
        } else if (anos >= 20) {
            salNovo = salario * 1.07;
            alert(`O novo salário da funcionária é:, ${salNovo.toFixed(2)}`);
        }
    } else {
        if (anos <=5) {
            salNovo = salario * 1.03;
            alert(`O novo salário da funcionário é:, ${salNovo.toFixed(2)}`);
        } else if (anos >= 5 && anos <=15) {
            salNovo = salario * 1.08;
            alert(`O novo salário da funcionário é:, ${salNovo.toFixed(2)}`);
        }else if (anos >= 20 && anos<=30) {
            salNovo = salario * 1.14;
            alert(`O novo salário da funcionário é:, ${salNovo.toFixed(2)}`);
        } else if (anos>=30){
            salNovo = salario * 1.25;
            alert(`O novo salário da funcionário é:, ${salNovo.toFixed(2)}`);
        }
    }
}
