var lamp = window.document.getElementById('lampada')

function estaQuebrada(){
    return lamp.src.indexOf('quebrada') > -1
}

function Ligar(){
    if (!estaQuebrada()){
    lamp.src = 'img/ligada.svg'
    principal.style.background = 'rgb(48, 48, 48)'
    }
}

function Desligar(){
    if (!estaQuebrada()){
    lamp.src = 'img/desligada.svg'
    principal.style.background = 'black'
    }
}

function Resetar(){
    lamp.src = 'img/desligada.svg'
    principal.style.background = 'rgb(48, 48, 48)'
}

lamp.addEventListener ('click', Quebrar)
function Quebrar(){
    lamp.src = 'img/quebrada.svg'
}