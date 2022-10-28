function login() {
   var nomeJogador1=document.getElementById("Nome1").value;
   var nomeJogador2=document.getElementById("Nome2").value;

   localStorage.setItem("nomeJogador1", nomeJogador1);
   localStorage.setItem("nomeJogador2", nomeJogador2);

   window.location=("gamePage.html");
}