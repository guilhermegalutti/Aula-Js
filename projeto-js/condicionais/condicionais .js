const temperatura = 35; 

if (temperatura > 30) {
    console.log("Está calor!!")
}

console.log("Fim do programa!");

const idade = Number(prompt("sua idade:"));

if (Number.isNaN(idade) || idade < 0) {
    console.log("idade inválidade!");
}else {
    if (idade >= 18) {
        console.log("maior de idade")
    }else{
        console.log("menor de idade!!")
    }
}