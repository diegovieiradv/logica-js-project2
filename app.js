let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10 e tente adivinhar o número secreto!';
*/

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela(
  "p",
  "Escolha um número entre 1 e 10 e tente adivinhar o número secreto!"
);

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");

    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela("p", mensagemTentativas);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior");
    }
  }
  tentativas++;
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
