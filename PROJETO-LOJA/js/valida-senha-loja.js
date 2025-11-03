export default function ehUmaSenhaValida (campo){
    const senha = campo.value;
    if(!senhaNumero(senha)||!senhaCaracter(senha)){
        console.log("A senha deve ter 6 caracteres, pelo menos um número e um caractere especial.")
         campo.setCustomValidity('A senha deve ter 6 caracteres, pelo menos um número e um caractere especial.');
    }
}

function senhaNumero(senha){

    for(let tamanho = 0 ; tamanho < 5 ; tamanho++){
        for(let i = 0; i <10 ; i++){
           if(senha[tamanho] == i){
            return true;
           }
        }
    }
}

function senhaCaracter(senha){
    const caracteres = [
        '!',
        '"',
        '#',
        '$',
        '%',
        '&',
        '(',
        ')',
        '*',
        '+',
        ',',
        '-',
        '.'
    ]

    for( let tamanho = 0; tamanho <5 ; tamanho++){
        if(caracteres.includes(senha[tamanho])){
            return true;
        }
    }
}
