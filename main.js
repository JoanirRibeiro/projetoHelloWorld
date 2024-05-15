let nomeUsuário = "" ;
let elemento = document.querySelector("#nome-usuário");


while(nomeUsuário == "") {
    nomeUsuário = prompt("Qual o seu nome?");
}

if (nomeUsuário == null) {
    elemento.textContent = "Seja Bem Vindo";
} else{
    elemento.textContent = nomeUsuário;
}

