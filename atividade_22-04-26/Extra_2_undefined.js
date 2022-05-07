const msg = 'Victor Sousa Almeida'
tamanho = msg.length

function fazerRelatorio(msg){
    msg_lower = msg.toLowerCase();
    if ((msg_lower>='a') && (msg_lower<='z')){
        var msgInvertida = "";
        numeroVogais = 0;
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
    else{
        function indefinida(){}
        return "Oh carai\n" + indefinida()
    }
}
console.log(fazerRelatorio(msg))


//  Para adcionar a excessão, foi preciso um if que pergunta se a msg passada está dentro das letras do alfabeto, quis
// passar todas as letras em lowerCase para não ter que colocar um || com as letras em maiusculo
//  Para o else o retorno de uma string simples com uma função vazia que possui valor indefinido