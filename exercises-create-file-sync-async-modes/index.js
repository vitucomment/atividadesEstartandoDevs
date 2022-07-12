const fs = require('fs')

const conteudo = ` Estartando Devs \n Victor Almeida \n 02/06/2022`

const writeFileAsync = (fileName, content) =>{
    fs.writeFile(`${fileName}.txt`, content, err => {
        if(err){
            throw new err
        }
    })
}

const writeFileSync = (fileName, content) =>{
    fs.writeFileSync(`${fileName}.txt`, content, err => {
        if(err){
            throw new err
        }
    })
}

for(i=1; i<= 5; i++){
    writeFileAsync(`Async-text-${i}`, conteudo)
    writeFileSync(`sync-text-${i}`, conteudo)
}

/* 
Como o intuito do exercicio era usar a biblioteca "fs" e escrever aquivos no sistema,
usei um "for" simples para chamar as funções e nomear os arquivos
*/ 