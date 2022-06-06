const alunosNotas = [
    { nome: 'Joao', notas: [5, 7.5, 8, 8, 4.5, 9] },
    { nome: 'Breno', notas: [10, 8.5, 10, 7.5, 9, 6.5] },
    { nome: 'Pedro', notas: [5.5, 8.3, 9.5, 8, 9, 6.9] },
    { nome: 'Fulano', notas: [5.9, 8.5, 4, 8, 9.5, 6] },
    { nome: 'Angel', notas: [0, 4.8, 9.2, 8.5, 4.9, 6.1] },
    { nome: 'Jaja', notas: [10, 4.3, 6.8, 8.25, 9.4, 6] },
    { nome: 'Frederico', notas: [3.5, 8, 10, 8.5, 9, 3.8] },
    { nome: 'Jonatas', notas: [6, 8.5, 8, 6.5, 7, 10] },
    { nome: 'Henrique', notas: [4, 8.2, 5.5, 8.5, 5.4, 6] }
]

//_______________________Metodo 'forEach'_______________________
console.log('____EXERCICIO RESOLVIDO UTILIZANDO FOREACH____')
alunosNotas.forEach((aluno)=>{
    let media = 0
    let soma = 0
    for (i=0; i < aluno.notas.length; i++){
        soma += aluno.notas[i]
        media = soma/aluno.notas.length
   }   
    aluno.media = parseFloat(media.toFixed(1))})
console.log(alunosNotas)


//_______________________Metodo 'map'_______________________
console.log('____EXERCICIO RESOLVIDO UTILIZANDO MAP____')
const alunosNotasMedias = alunosNotas.map(function(aluno){
    let media = 0
    let soma = 0
    for (i=0; i < aluno.notas.length; i++){
        soma += aluno.notas[i]
        media = soma/aluno.notas.length
    }   
    aluno.media = parseFloat(media.toFixed(1))
    return alunosNotas})
console.log(alunosNotasMedias[0])


//_______________________Metodo 'forEach' dentro do 'map'_______________________
console.log('____EXERCICIO RESOLVIDO UTILIZANDO FOREACH DENTRO DO MAP____')
const alunosComMedia = alunosNotas.map(({nome, notas}) => {
    let somaDasNotas = 0
    notas.forEach((nota) => somaDasNotas += nota)
    let media = parseFloat((somaDasNotas / notas.length).toFixed(1))
    return {nome, notas, media}})
console.log(alunosComMedia)



//  Utilizando apenas o 'forEach' foi a forma mais fácil que encontrei e a primeira que fiz, pensei em criar algumas funções para as funcionalidades ja que os trechos de códigos se repetiam entre um metodo e outro.
//  Com somente o metodo 'map', encontrei dificuldades na hora de passar a média para o array, e quando tentava imprimir o alunosNotasMedias, era criado um array para cada aluno, portanto para imprimir usei o primeiro valor do alunosNotasMedias
//  Paro o metodo 'forEach' dentro do 'map', precisei da ajuda de um dos monitores mas revisando bem, consegui entender como foi aplicado, apenas finalizei transformando para 'float' as médias e fixando em 1 casa decimal. Foi o metodo mais interessante dos tres, sem dúvidas o que mais utiliza os ensinamentos da aula.
