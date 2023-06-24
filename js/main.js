const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.parentNode, evento.target.dataset.controle)
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle)
        // Agora ao chamar a função atualizaEstatistica pegamos o sinal da operação (+ ou -) como na função manipulaDados para determinar com o if se adiciona ou subtrai valor a estatística
    })
})

function manipulaDados(controle, operacao) {
    const peca = controle.querySelector('[data-contador]')

    if (operacao === '-') {
        if (peca.value > 0){
            peca.value = parseInt(peca.value) - 1
        }
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca, operacao) { //Adicionar outro parâmentro na função atualizaEstatística e utilizar o if da função anterior
    estatisticas.forEach( (elemento) => {
        if (operacao === "-"){
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        } else {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }
    })
}