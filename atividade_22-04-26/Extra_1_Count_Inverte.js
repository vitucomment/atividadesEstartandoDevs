// Variaveis globais
const msg = 'Victor Almeida'
tamanho = msg.length


function fazerRelatorio(msg){
    var msgInvertida = "";
    numeroVogais = 0;
    msg_lower = msg.toLowerCase();
    for (index = 0; index <= tamanho+1 ; index++){
       if(
        msg_lower[index]== 'a' ||
        msg_lower[index]== 'e' ||
        msg_lower[index]== 'i' ||
        msg_lower[index]== 'o' ||
        msg_lower[index]== 'u')
        {   numeroVogais += 1   }
    }
    for (index = tamanho-1; index >= 0; index--){
        msgInvertida += msg[index];
    }
    return '• Palavra: "' + msg +'"\n• Palavra invertida: "' + msgInvertida + '"\n• Numero de vogais: ' + numeroVogais
}
//  Só foi preciso aproveitar o código das duas questões anteriores e adaptar, também foi possível fazer o if dentro do
// 'for' de inversão, economizando espaço e retirando o segundo 'for'



function fazerRelatorio_2(msg){
    var msgInvertida = "";
    numeroVogais = 0;
    msg_lower = msg.toLowerCase();
    for (index = tamanho-1; index >= 0; index--){
        msgInvertida += msg[index];
        if(
        msg_lower[index]== 'a' || 
        msg_lower[index]== 'e' || 
        msg_lower[index]== 'i' || 
        msg_lower[index]== 'o' || 
        msg_lower[index]== 'u')
        {   numeroVogais += 1   }
    }
    return '• Palavra: "' + msg +'"\n• Palavra invertida: "' + msgInvertida + '"\n• Numero de vogais: ' + numeroVogais
}


// Chamando as duas funções
console.log(fazerRelatorio(msg))
console.log('________________________________________\n')
console.log(fazerRelatorio_2(msg))
