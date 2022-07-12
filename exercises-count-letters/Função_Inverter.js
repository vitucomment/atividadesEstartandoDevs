// Variáveis globais
const msg = 'Victor Almeida';
tamanho = msg.length;


inverter(msg)
function inverter(texto){
    var msgInvertida = "";
    for (index = tamanho-1; index >= 0; index--){
        msgInvertida += texto[index];
    }
    return console.log('A palavra invertida é: ' + msgInvertida);
}

const inverter_2 = (msg) => console.log('A palavra invertida é: '+ msgInvertida)
    var msgInvertida = "";
    for (index = tamanho-1; index >= 0; index--){
        msgInvertida += msg[index];
    }
inverter_2(msg)


// Percebi que dessa maneira, não podemos chamar a função antes de declarar, e o que seria o parametro da função
// deve ser a string ou variavel da string que vai ser invertida.

// A maior dificuldade que tive foi em montar a estrutura do FOR, estou acostumado com Python e a implementação 
// é bem mais simples, vou precisar praticar.