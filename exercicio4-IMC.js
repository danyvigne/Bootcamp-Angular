/* Calcular IMC

IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto, mostra a condição segundo a tabela abaixo.

IMC em adultos Condição
- Abaixo de 18.5 abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 acima do peso;
- Entre 30 e 40 obeso;
- Acima de 40 obesidade grave;

*/

let peso = 75;
let altura = 1.72;

let imc = peso / (altura * altura)
//biblioteca para exponenciação
//Math.pow(altura,2)

if (imc < 18.5){
    console.log(`Seu IMC é de ${imc} e você está abaixo do peso`)
} else if (imc >= 18.5 && imc > 25){
    console.log(`Seu IMC é de ${imc} e você está com o peso normal`)
} else if (imc >= 25 && imc < 30){
    console.log(`Seu IMC é de ${imc} e você está acima do peso`)
} else if (imc >= 30 && imc <= 40){
    console.log(`Seu IMC é de ${imc} e você está obeso`)
} else {
    console.log(`Seu IMC é de ${imc} e você está com obesidade grave, procure um profissional`)
}