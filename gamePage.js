var nomeJogador1 = localStorage.getItem("nomeJogador1");
var nomeJogador2 = localStorage.getItem("nomeJogador2");
var pontoDoJogador1 = 0;
var pontoDoJogador2 = 0;
var palavra;
var resposta;

document.getElementById("player1Name").innerHTML = nomeJogador1 + ":";
document.getElementById("player2Name").innerHTML = nomeJogador2 + ":";

document.getElementById("pontosJogador1").innerHTML = pontoDoJogador1;
document.getElementById("pontosJogador2").innerHTML = pontoDoJogador2;

document.getElementById("jogadorPergunta").innerHTML = "turno de pergunta: " + nomeJogador1;
document.getElementById("jogadorResposta").innerHTML = "turno da resposta: " + nomeJogador2;

function enviar() {
   palavra = document.getElementById("word").value;
   palavra = palavra.toLowerCase();
   console.log("palavra em caixa baixa: " + palavra);
   var caracter1 = palavra.charAt(1);
   var comprimentoDividido2 = Math.floor(palavra.length / 2);
   var caracter2 = palavra.charAt(comprimentoDividido2);
   var comprimentoMenos1 = palavra.length - 1;
   var caracter3 = palavra.charAt(comprimentoMenos1);

   var subCaracter1 = palavra.replace(caracter1, "_");
   var subCaracter2 = subCaracter1.replace(caracter2, "_");
   var subCaracter3 = subCaracter2.replace(caracter3, "_");

   var palavraPergunta = "<h4 id='wordDisplay'> Pergunta " + subCaracter3 + "</h4>";
   var caixaDeEntrada = "<br> Resposta: <input type='text' id='inputCheckBox'>";
   var botaoChecar = "<br> <button class='btn btn-info' onclick='checar()'> Checar </button>";
   var linha = palavraPergunta + caixaDeEntrada + botaoChecar;
   
   document.getElementById("output").innerHTML = linha;
   document.getElementById("word").value = ""; 
}

var turnoDaPergunta = "Jogador1";
var turnoDaResposta = "Jogador2";

function checar() {
   resposta = document.getElementById("inputCheckBox").value;
   resposta = resposta.toLowerCase();
   console.log("Resposta em caixa baixa: " + resposta);
   
   if(resposta == palavra) {
      if(turnoDaResposta == "Jogador1") {
         pontoDoJogador1 = pontoDoJogador1 + 1;
         document.getElementById("pontosJogador1").innerHTML = pontoDoJogador1;
      }
      else {
         pontoDoJogador2 = pontoDoJogador2 + 1;
         document.getElementById("pontosJogador2").innerHTML = pontoDoJogador2;
      }
   }

   if(turnoDaPergunta == "Jogador1") {
      turnoDaPergunta = "Jogador2";
      document.getElementById("jogadorPergunta").innerHTML = "Turno da pergunta: " + nomeJogador2;
   }
   else {
      turnoDaPergunta = "Jogador1";
      document.getElementById("jogadorPergunta").innerHTML = "Turno da pergunta: " + nomeJogador1;
   }

   if(turnoDaResposta == "Jogador1") {
      turnoDaResposta = "Jogador2";
      document.getElementById("jogadorResposta").innerHTML = "Turno da resposta: " + nomeJogador2;
   }
   else {
      turnoDaResposta = "Jogador1";
      document.getElementById("jogadorResposta").innerHTML = "Turno da resposta: " + nomeJogador1;
   }

   document.getElementById("output").innerHTML = "";
}