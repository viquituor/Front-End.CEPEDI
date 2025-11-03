import ehUmCPF from "./valida-cpf-loja.js";
import ehMaiorDeIdade from "./valida-idade-loja.js";
import ehUmaSenhaValida from "./valida-senha-loja.js";
const camposDoFormulario = document.querySelectorAll('[required]');

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: " O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    senha: {
        customError: "pelo menos um número e um caractere especial.",
        valueMissing: "O campo de senha não pode estar vazio.",
        patternMismatch: "Por favor, preencha um senha válida.",
        tooShort: "!O campo de senha não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    dataNascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("invalid", evento => evento.preventDefault());
    campo.addEventListener('blur', ()=> verificaCampo(campo));
})

function verificaCampo (campo){

    let mensagem = "";
    campo.setCustomValidity('');

     if(campo.name == "cpf" && campo.value.length >= 11){
        ehUmCPF(campo);
     }

     if(campo.name == "dataNascimento" && campo.value != ""){
         ehMaiorDeIdade(campo);
     }
     if(campo.name == "senha" && campo.value != ""){
        ehUmaSenhaValida(campo);
     }

     tiposDeErro.forEach(erro => {
        if(campo.validity[erro]){
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    })

    const mensagemErro =  campo.parentNode.querySelector('.txt-erro')
    const validadorDeInput = campo.checkValidity();
    if(!validadorDeInput){
        mensagemErro.innerHTML = `&#9888; ${mensagem}`;
    } else {
        mensagemErro.textContent = "";
    }
}