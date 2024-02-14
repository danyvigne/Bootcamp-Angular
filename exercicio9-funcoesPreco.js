/*Elabore um algoritmo que calcula o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.

Código Condição de Pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal da etiqueta, sem juros;
- Acima de duas vezes, preço normal da etiqueta, mais juros de 10%.
*/

function aplicarDesconto(valor, desconto){
    return (valor - valor * (desconto / 100));
}

let precoEtiqueta = 100;
let formaPagamento = 4;

if (formaPagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10))
} else if ( formaPagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta, 15))
}    else if (formaPagamento === 3){
    console.log(precoEtiqueta)
} else {
    console.log(aplicarDesconto(precoEtiqueta, -10))
}