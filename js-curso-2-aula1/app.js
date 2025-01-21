let listaNumSort = [];
let qtdNumero = 5000;
let tentativas = 1;

let numSecreto = geraNumeroAleatorio();

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  if ("speechSynthesis" in window) {
    let uttrance = new SpeechSynthesisUtterance(texto);
    uttrance.lang = "pt-BR";
    uttrance.rate = 1.2;
    window.speechSynthesis.speak(uttrance);
  } else {
    console.log("Weeb Speech não suportado neste navegador.");
  }
}

function mensagemInicial() {
  exibirTexto("h1", "Jogo do número secreto");
  exibirTexto("p", "Escolha um número entre 1 e " + qtdNumero);
}
mensagemInicial();

function verificaChute() {
  let chute = document.querySelector("input").value;
  if (chute == numSecreto) {
    let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativa = `Parabéns, você acertou!! em ${tentativas} ${palavraTentativas}`;
    exibirTexto("h1", mensagemTentativa);
    exibirTexto("p", "O número secreto era " + numSecreto);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numSecreto) {
      exibirTexto("p", "o numero e menor que o " + chute);
    } else {
      exibirTexto("p", "o numero e maior que o " + chute);
    }
    tentativas++;
    limparCampo();
  }
}

function geraNumeroAleatorio() {
  let numeroSorteado = parseInt(Math.random() * qtdNumero + 1);
  let qtdeMaxNumero = listaNumSort.length;

  if (qtdeNumero == qtdeMaxNumero) {
    listaNumSort = [];
  }
  if (listaNumSort.includes(numeroSorteado)) {
    geraNumeroAleatorio();
  } else {
    listaNumSort.push(numeroSorteado);
    return numeroSorteado;
  }
}

function limparCampo() {
  chute = document.querySelector("input").value = "";
}

function reiniciarJogo() {
  numSecreto = geraNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  mensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
