/*Calculadora de média

Calcule a média entre três notas e imprima na tela.

Se media for menor que 5 = "Reprovado";
Se a média for entre 5 e 7 = "Recuperação";
Se a média for maior que 7 = "Aprovado";
*/

let nota1 = 5;
let nota2 = 7;
let nota3 = 8;

let media = (nota1 + nota2 + nota3) / 3
console.log("A média é " + media)

if (media < 5) {
    console.log("Reprovado")
} else if ( media >= 5 && media <= 7){
    console.log("Recuperação")
} else {
    console.log("Aprovado")
}