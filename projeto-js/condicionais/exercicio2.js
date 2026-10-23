//Peça a cor do semáforo (`"verde"`,`"amarelo"`, `"vermelho"`) e diga a ação.
//Exemplo: verde Siga. azul cor inválida.

// const semáforo = prompt("Qual a cor do semáforo?")

// if (semáforo == "verde") {
//     console.log("siga em frente")
// }else if (semáforo == "amarelo") {
//  console.log("Atenção")
//  }else if(semáforo ==="vermelho") {
//     console.log("Pare.");
//  } else {
//     console.log ("cor inválida")
//  }


/*
// 

const nota = Number(prompt("Nota (0-100):"));

if (Number.isNaN(nota) || nota < 0 || nota > 100) {
    console.log("Nota inválida.");
} else if (nota < 60) {
    console.log("Reprovada!");
} else if (nota < 80) {
    console.log("Recuperação!");
} else {
    console.log("Aprovado!");
}
/*
Login com && e ||
Acesso liberado se (usuário é `admin` OU `gerente`) E senha é `1234`.
**Exemplo:** `admin` e `1234` → `Acesso liberado` · `admin` e `0000` → `Acesso negado`
*/

// 
// Classificador de Número
// Peça um número e diga se é positivo, negativo ou zero.
// **Exemplo:** `5` → `O número é positivo.` · `0` → `O número é zero.` · `abc` → `Valor inválido.`


//  

// Se a idade for >= 18, mostrar que pode tirar carteira; senão, que ainda não pode.

// **Exemplo:** `20` → `Você pode tirar a carteira de motorista.` · `15` → `Você ainda não tem idade para dirigir.` · `abc` → `Idade inválida.`

// 

 //3-)

//Use o resto da divisão (`%`) para dizer se um número é par ou ímpar.

//**Exemplo:** `10` → `O número é par.` · `7` → `O número é ímpar.` · `abc` → `Número inválido.`

// const numero = Number(prompt("Digite um número:"));

// if(Number.isNaN(numero)) {
//   console.log("Número inválido!");
// }else if (numero % 2 === 0) {
//   console.log("O número é par.");
// }else {
//   console.log("O número é Impar.");
// }

// Peça peso e altura, calcule o IMC e classifique: 
// <18.5 abaixo do peso, 18.5–24.9 normal, 25–29.9 sobrepeso, 
// >=30 obesidade. Valide entradas inválidas.

// **Exemplo:** peso `70` e altura `1.75` → `Seu IMC é: 22.86` e `Classificação: Peso normal`
   

// const peso = Number(prompt("digite seu peso em kg:")) ;
// const altura = Number(prompt("qual a sua altura em metros:"));

// if (Number.isNaN(peso) || Number.isNaN(altura) || peso <= 0 ||  altura <= 0) {
//     console.log("Valores de peso e altura inválidos.")
// } else{
//     const IMC = peso / (altura * altura );

//     console.log(`Seu IMC é: ${IMC.toFixed(2)}`);

//     if (IMC < 18.5) {
//         console.log("Classifiçação:Abaixo do peso");
//     }else if (IMC < 25) {
//         console.log("Classificação:peso normal");
//     }else if (IMC < 30) {
//         console.log("Classificação:Sobrepeso");
//     }else{
//         console.log("Classificação:Obesidade");
//     }
// }

// 

// Se o valor da compra for maior que R$ 100, aplicar 10% de desconto.

// **Exemplo:** `150` → `Valor final com desconto: R$ 135` · `80` → `Valor final: R$ 80`

// const valor = Number(prompt("digite o valor de compra:"));
// if (Number.isNaN(valor) || valor < 0  ) {
//     console.log("Valor inválido.");
// } else if (valor > 100) {
//     const desconto = valor * 0.1;
//     console.log("Valor final com desconto:" + (valor - desconto));
// } else {
//     console.log("valor final: R$ " + valor)
// }

// Peça 3 números e diga qual é o maior.

// **Exemplo:** `4`, `9` e `7` → `O maior número é: 9`

// const num1 = Number(prompt("digite o primeiro valor "));
// const num2 = Number(prompt ("digite o segundo valor"));
// const num3 = Number(prompt("digite o terceiro valor "));

// if (Number.isNaN(num1) || Number.isNaN(num2) || Number.isNaN(num3)) {
//     console.log("Números inválidos.");
// } else{
//     let maior = num1;
//     if (num2 > maior) maior = num2;
//     if (num3 > maior) maior = num3;
//     console.log("O maior número é: " + maior)

        
// Peça dois números e uma operação (+, -, *, /). Use switch para calcular, com default para operações invá.lidas e checagem de divisão por zero

const nun1 = Number(prompt("digite o primeiro número"));
const nun2 = Number(prompt("digite o segundo número"));
const operação = prompt("digite a operação (+, -, *, /):");
let resultado;

if (Number.isNaN(nun1)|| Number.isNaN(nun2) ) {
}else hn

