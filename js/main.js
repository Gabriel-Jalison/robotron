// ALTERANDO TEXTO EXIBIDO NA PAGINA //

const robotron = document.querySelector('.robo')

robotron.addEventListener('click', comunica);

function comunica() {
    alert('Bem vindo ao futuro!');
}


function trocaTitulo() {
    document.querySelector('.titulo').innerHTML = 'Bem vindo!';
}

robotron.addEventListener('click', trocaTitulo);
robotron.addEventListener('click', trocaRobo);

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 140 * i)
    });
}

const title = document.querySelector('.titulo');

typeWriter(title);


// FIM ALTERANDO TEXTO EXIBIDO NA PAGINA //


// INICIO CONFIGURAÇÃO DE SUBTRAÇÃO E SOMA DOS BOTÕES DO ROBOTRON //

const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]")
console.log(estatisticas)

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");
    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca) {

    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]

    })
}


// FINAL CONFIGURAÇÃO DE SUBTRAÇÃO E SOMA DOS BOTÕES DO ROBOTRON //


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
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


const carros = [
    {
        modelo: "Onix",
        ano: "2021",
        preco: 45000,
        cor: "branca",
        alteraAno: function () {
            return this.ano = "2023";
        },
    },

    {
        modelo: "jeta",
        ano: "2022",
        preco: 125000,
        cor: "preto"
    },
];

var linksImg = ['img/robotronazul.png', 'img/robotronbranco.png', 'img/PROJETO FINAL ROBOTRON.PNG'];

function trocaRobo() {
    let i = 1;
    const imgz = document.querySelector('.robo').src = (linksImg[i]);

};

console.log(carros[0]["modelo"])
console.log(carros[1].modelo)
carros[0].estoque = "100"
delete carros[0].estoque
console.log(carros)
console.log(this)