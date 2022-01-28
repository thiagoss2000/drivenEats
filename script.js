let val01 = 0;
let val02 = 0;
let val03 = 0;
let pedido = false;
let nome;
let endereco;

function opcao1() {
    var element = document.getElementById("click1");
    element.style.border = "solid";
    element.style.borderColor='rgb(163, 241, 46)';
    var element = document.getElementById("click2");
    element.style.border = "none";
    var element = document.getElementById("click3");
    element.style.border = "none";

    val01 = 14.90;
    button();
}
function opcao2() {
    var element = document.getElementById("click1");
    element.style.border = "none";
    var element = document.getElementById("click2");
    element.style.border = "solid";
    element.style.borderColor='rgb(163, 241, 46)';
    var element = document.getElementById("click3");
    element.style.border = "none";

    val01 = 14.90;
    button();
}
function opcao3() {
    var element = document.getElementById("click1");
    element.style.border = "none";
    var element = document.getElementById("click2");
    element.style.border = "none";
    var element = document.getElementById("click3");
    element.style.border = "solid";
    element.style.borderColor='rgb(163, 241, 46)';

    val01 = 14.90;
    button();
}
function opcao2_1() {
    var element = document.getElementById("click2_1");
    element.style.border = "solid";
    element.style.borderColor='rgb(163, 241, 46)';
    var element = document.getElementById("click2_2");
    element.style.border = "none";
    var element = document.getElementById("click2_3");
    element.style.border = "none";

    val02 = 4.90;
    button();
}
function opcao2_2() {
    var element = document.getElementById("click2_1");
    element.style.border = "none";
    var element = document.getElementById("click2_2");
    element.style.border = "solid";
    element.style.borderColor='rgb(163, 241, 46)';
    var element = document.getElementById("click2_3");
    element.style.border = "none";

    val02 = 4.90;
    button();
}
function opcao2_3() {
    var element = document.getElementById("click2_1");
    element.style.border = "none";
    var element = document.getElementById("click2_2");
    element.style.border = "none";
    var element = document.getElementById("click2_3");
    element.style.border = "solid";
    element.style.borderColor='rgb(163, 241, 46)';

    val02 = 4.90;
    button();
}
function opcao3_1() {
    var element = document.getElementById("click3_1");
    element.style.border = "solid";
    element.style.borderColor='rgb(163, 241, 46)';
    var element = document.getElementById("click3_2");
    element.style.border = "none";
    var element = document.getElementById("click3_3");
    element.style.border = "none";

    val03 = 7.90;
    button();
}
function opcao3_2() {
    var element = document.getElementById("click3_1");
    element.style.border = "none";
    var element = document.getElementById("click3_2");
    element.style.border = "solid";
    element.style.borderColor='rgb(163, 241, 46)';
    var element = document.getElementById("click3_3");
    element.style.border = "none";

    val03 = 7.90;
    button();
}
function opcao3_3() {
    var element = document.getElementById("click3_1");
    element.style.border = "none";
    var element = document.getElementById("click3_2");
    element.style.border = "none";
    var element = document.getElementById("click3_3");
    element.style.border = "solid";
    element.style.borderColor='rgb(163, 241, 46)';
    
    val03 = 7.90;
    button();
}
function button(){
    if (val01 != 0 && val02 != 0 && val03 != 0) {
        var button = document.getElementById("button");
        button.style.background = "#32B72F";
        button.style.cursor = "pointer";
        button.innerHTML = "Fechar pedido";
        pedido = true;
    }
}
function fechar(){
    if (pedido == true){
        nome = prompt("Digite seu nome?");
        endereco = prompt("Agora o seu endereço?");
        var fundo = document.getElementById("fundo");
        let total = (val01 + val02 + val03).toFixed(2);
        const elemento = document.querySelector(".total");
        elemento.innerHTML = "R$ " + total;
        fundo.style.display = "unset";
    }
}
function cancelar() {
    fundo.style.display = "none";
}
function confirmar() {
    alert(nome + ", " + endereco);
}