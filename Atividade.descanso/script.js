const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.getElementById('alternar-musica');
const startPauseBt = document.querySelector('#start-pause');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const playPauseIcon = document.querySelector('.app__card-primary-butto-icon');
const tempoNaTela = document.getElementById('timer');

const musica = new Audio('sons/luna-rise-part-one.mp3');
const pause = new Audio('sons/pause.mp3');
const play = new Audio('sons/play.wav');
const final = new Audio('sons/beep.mp3');

musica.loop = true;

let tempoDecorrioEmSegundos = 1500;
let intervaloID = null;


musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
            musica.play()
        } else {
            musica.pause()
        }
})


focoBt.addEventListener('click', () => {
   tempoDecorrioEmSegundos = 1500;
    alterarContexto('foco');
    focoBt.classList.add('active');
    
})

curtoBt.addEventListener('click', () => {
    tempoDecorrioEmSegundos = 300;
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
    
})

longoBt.addEventListener('click', () => {
    tempoDecorrioEmSegundos = 900;
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
    
})

function alterarContexto(contexto){
    mostrarTempo();
    botoes.forEach(function (contexto){
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src',`./imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            titulo.innerHTML =
            `Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case "descanso-curto":
            titulo.innerHTML =
            `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;
        case "descanso-longo":
            titulo.innerHTML =
            `Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>`
            break;
        default:
            break;
    }    
}

const contagemRegressiva = () => {
    if(tempoDecorrioEmSegundos <= 0){
        parar();
        console.log('Temporizador finalizado');
        final.play();
        return
    }else{
    tempoDecorrioEmSegundos -=1;
    console.log('Temporizador = ' + tempoDecorrioEmSegundos);
    mostrarTempo();
}}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar(){

    if(intervaloID){
        iniciarOuPausarBt.textContent = 'retomar';
        playPauseIcon.setAttribute('src', `./imagens/play_arrow.png`);
        parar();
        pause.play();
        return;
    }
        intervaloID = setInterval(contagemRegressiva, 1000);
        playPauseIcon.setAttribute('src', `./imagens/pause.png`);
        iniciarOuPausarBt.textContent = 'PAUSE';
        play.play();
}

function parar(){
    clearInterval(intervaloID);
    intervaloID = null;
}

function mostrarTempo(){
    const tempo = new Date(tempoDecorrioEmSegundos * 1000);
    const tempoFomatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFomatado}`;
}

mostrarTempo();