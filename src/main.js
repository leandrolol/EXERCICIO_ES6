const alunos = ['Leandro', 'João', 'Paulo', 'Joaquim'];
const notas = ['10', '7', '5', '9'];


const alunosComNotas = alunos.map((nome, indice) =>({
    nome: nome,
    nota: notas[indice]
}));

console.log(alunosComNotas)

const filtraAlunosAprovados = aluno => aluno.nota >= 6;

const alunosAprovados = alunosComNotas.filter(filtraAlunosAprovados)

console.log(alunosAprovados)