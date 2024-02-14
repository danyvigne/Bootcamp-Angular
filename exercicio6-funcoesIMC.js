function calcularImc(peso, altura){
    return peso / Math.pow(altura,2)
}


function classificarImc(imc){
    if (imc < 18.5){
        return `Seu IMC é de ${imc} e você está abaixo do peso`
    } else if (imc >= 18.5 && imc > 25){
        return `Seu IMC é de ${imc} e você está com o peso normal`
    } else if (imc >= 25 && imc < 30){
        return `Seu IMC é de ${imc} e você está acima do peso`
    } else if (imc >= 30 && i <= 40){
        return `Seu IMC é de ${imc} e você está obeso`
    } else {
        return `Seu IMC é de ${imc} e você está com obesidade grave, procure um profissional`
    }
}

(function main(){
    const peso = 75;
    const altura = 1.72;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();




