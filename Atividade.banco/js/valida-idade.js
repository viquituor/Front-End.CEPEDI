export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);

    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity('usuário não é maior de idade');
    }
    
    console.log(validaIdade(dataNascimento));
}

function validaIdade(dataNascimento) {
    const dataAtual = new Date();
    const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}