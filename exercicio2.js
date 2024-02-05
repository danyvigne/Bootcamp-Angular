/*calcular valor da viagem

1 - preço etanol;
2 - preço gasolina;
3 - o tipo de combustivel que está no catrro;
4 - gasto médio de combustível no carro;
5 - Distância em Km da distanciaViagem;

Imprima no console o valor que será gasto para realizar a viagem.
*/

let precoEtanol = 3.64 //9.8km/l
let precoGasolina = 5.58 //13,9kml
let combustivel = "Gasolina"
let gastoMedioGasolina = 13.9
let gastoMedioEtanol = 9.8
let distanciaViagem = 135

if (combustivel == "Gasolina"){
    let x = ((distanciaViagem/ gastoMedioGasolina * precoGasolina).toFixed(2))
    console.log('O Gasto com gasolina é de aproximadamente ' + x)
} else {
    let y = ((distanciaViagem/ gastoMedioEtanol * precoEtanol).toFixed(2))
    console.log('O Gasto com Etanol é de aproximadamente ' + y)
}
