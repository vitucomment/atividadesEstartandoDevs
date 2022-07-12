const msg = 'Estartando Devs, Transformando o mundo através da tecnologia';
tamanho = msg.length;


function contarNumeroVogais(msg){
    numeroVogais = 0;
    msg = msg.toLowerCase();
    for (index = 0; index <= tamanho+1 ; index++){
        if(
        msg[index]== 'a' ||
        msg[index]== 'e' ||
        msg[index]== 'i' ||
        msg[index]== 'o' ||
        msg[index]== 'u')
        {   numeroVogais += 1   }
    }
    return 'O número de vogais dessa string é: ' + numeroVogais;
}
console.log(contarNumeroVogais(msg));


//  Tentei criar uma lista com as vogais, e a cada laço perguntar e a letra do indice correspondente estava dentro 
// da lista com vogais, mas não seria tão simples quanto imaginei quando pesquisei, então usei o que a aula ensinou
//  Percebi que o número de vogais não batia por conta das letras maiusculas, então tinha duas opções, colocar dentro
// do IF as 5 vogais em letra maiuscula ou usar um motedo que transformasse todo o texto em letra minuscula antes do for