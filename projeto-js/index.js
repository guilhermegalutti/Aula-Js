//Linguagem Interpretada
//Nodejs
//Tipagem fraca
/*
let minhaVariavel = 10;
console.log(minhaVariavel);

minhaVariavel = "Ola, mundo !!";
console.log(minhaVariavel);

minhaVariavel =true;
console.log(minhaVariavel);

let numero = 10;
let texto ="20";
let resultado = numero + texto;

console.log(resultado);

*/

//Variavel

//let palavra que cria a variável
//const palavra que cria a variável
//var palavra que cria a variável
//let idade = 35;
//idade nome (etiqueta)
//= (atribuição)
//35 valor

/*
let nome = "Lucas"
let idade1= 35;

console.log(nome);
console.log(idade1);
console.log(idade + 1);
console.log("Olá, " + nome + "!");

idade1= 30;

const idade2 = 35;
idade2 = 30;
*/


//Case Sensitive
/*
let nome = "Lucas";
let Nome = "maria";
let NOME = "joão";
console.log(nome)
console.log(Nome)
console.log(NOME)
*/

//Palavras Reservadas
//let, const, var, if, else, for, while, function, return, class, new, switch, case
//let if = "teste";

//Regras de Nomenclatura
//Pode começar com letra, _ ou $
//Pode conter: letras,números, _ ou $
/*
let idade = 20;
idade = 21;
console.log(idade);

const PI = 3.14159;

const total = 150;

if (total > 100) {
    var desconto = 10;
    let frete = 0;
}

console.log(desconto)
*/

//Tipos Primitivos
/*
const preco = 19.9;
console.log( typeof preco);

const nome = "Lucas";
console.log(typeof nome);

const ativo = true;
console.log(typeof ativo);

const vazio = null;
console.log(typeof vazio);

let indefinido;
console.log(typeof indefinido);
*/


//Strings e Template Literals
/*
const nome1 = "Lucas";
const nome2 = 'Maria'
const nome3 = `João`
const idade = 16;

const nomeCompleto = "Guilherme Rodrigues Galutti"

console.log(nomeCompleto.length);
console.log(nomeCompleto.toUpperCase ());
console.log(nomeCompleto.toLowerCase());

console.log(`Olá, meu nome é ${nomeCompleto} e tenho ${idade} anos.`)
*/

//Conversões de Tipo
/*
console.log(Number("123"));
console.log(parseInt("10.9"));
console.log(parseFloat("10.9"));
console.log(String(123));

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));

const texto1 = prompt("digite um número:");
const texto = Number(prompt("digite um número"));

console.log(texto + 5);
*/

//Arredondando e formatando números
/*
const preco = 19.987;

console.log(preco.toFixed(2));
console.log(Math.round(preco));
console.log(Math.floor(preco));
console.log(Math.ceil(preco));
*/

//Operadores Aritméticos
/*
console.log(2 +3);
console.log(5 - 2 );
console.log(4 * 2);
console.log(10 / 2);
console.log(10 % 3);
console,log(2** 3);
 */

//Operadores de comparaçáo
/*
console.log(5 == "5") //igual frouxo
console.log(5 == 5); //igual frouxo

console.log(5 === "5") //igual estrito
console.log(5 === 5 ) //igual estrito

console.log(5 != "5") //diferente frouxo
console.log(5 != 7) //diferente frouxo

console.log(5 !== "5") //diferente estrito
console.log(5 !== 7) //diferente estrito
*/

// média de duas notas
/*
const n1 = Number(prompt("Primeira nota:"));
const n2 = Number(prompt("Segunda nota:"));

const media = (n1 + n2) /2;

console.log(`media: ${media.toFixed(1)}`);
*/

//IMC (Indice de massa Corporal)
const peso = Number(prompt("digite seu peso (kg):"));
const altura = Number(prompt ("Altura (m):"));

const imc = peso / (altura ** 2);

console.log(`IMC: ${imc.toFixed(2)}`);
