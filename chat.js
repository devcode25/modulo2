const input = require("readline-sync");
//esta entrada permite que a variável input utilize a dependência readline-sync. O comando require é usado antes da dependência.

console.log("Seja bem vinde! Vamos fazer o seu login")

const idade = input.question("Qual a sua idade?");

if (idade >= 16 && idade < 18) {
    console.log("Pode entrar. Mas não vai beber hein!")
} else if (idade >= 18) {
    console.log("Pode entrar. Bora bebeeerrr!!!")
} else {
    console.log("Entrada não permitida")
};

