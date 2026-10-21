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

const user = prompt("Usuário:");
const pass = prompt("Senha:");

const perfilOK = (user === "admin" || user === "gerente");
const senhaOK = (pass === "1234");

if (perfilOK && senhaOK) {
    console.log("Acesso liberado");
}else {
    console.log("Acesso negado");
}
