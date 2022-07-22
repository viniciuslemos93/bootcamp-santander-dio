const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora',    
}
pessoa.idade = 29;

const andre: { nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Pintor'
}

const paula: { nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
}
//enum é basicamente um grupo de constantes.
enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol,
}

interface Estudante extends Pessoa{
    materias: string [],

}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao //A interrogação para mensionar o tipo, é para informar que pode ou não possuir este atributo.
}

const Vanessa: Pessoa {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora

}

const maria: Pessoa {
    nome: 'Maria',
    idade: 45,
    profissao: Profissao.Atriz
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 22,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática descreta', 'Programação']
}

const monica: Estudante = {
    nome: 'Jessica',
    idade: 22,    
    materias: ['Matemática descreta', 'Programação']
}

function listar (lista: string []) {
    for (const item of lista) {
        console.log ('- ', item);
    }
}

listar (monica.materias);