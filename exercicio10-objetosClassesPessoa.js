class Pessoa{
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e a minha idade é ${this.idade}`);
    }


}

//atribuindo valores à classe
const dany = new Pessoa();
dany.nome = 'Dany Vigné T. de Moraes';
dany.idade = 30;

console.log(dany)

const viviane = new Pessoa();
viviane.nome = 'Viviane Natália Ribeiro Silva de Moraes';
viviane.idade = 37;

console.log(viviane)

const luke = new Pessoa();
luke.nome = 'Luke de Moraes';
luke.idade = 2;

dany.descrever()
viviane.descrever()
luke.descrever()