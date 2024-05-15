let nomeUsuário = "" ;
let elemento = document.querySelector("#nome-usuário");


while(nomeUsuário == "") {
    nomeUsuário = prompt("Qual o seu nome?");
}

elemento.textContent = nomeUsuário;