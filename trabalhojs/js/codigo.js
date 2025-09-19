//listeners
document.querySelector("#bp1").addEventListener("click",verifica1);
//funcoes
function verifica1(){
    if (document.querySelector("#p1opcao1").checked){
        document.querySelector("#resposta1").style.display="block";
        document.querySelector("#pergunta2").style.display="block";
        document.querySelector("#erro1").style.display="none";
        document.querySelector("#bp1").style.display="none";
    }
    else{
        document.querySelector("#erro1").style.display="block";
    }
}

//listeners
document.querySelector("#bp2").addEventListener("click",verifica2);
//funcoes
function verifica2(){
    if (document.querySelector("#p2opcao2").checked){
        document.querySelector("#resposta2").style.display="block";
        document.querySelector("#pergunta3").style.display="block";
        document.querySelector("#erro2").style.display="none";
        document.querySelector("#bp2").style.display="none";
    }
    else{
        document.querySelector("#erro2").style.display="block";
    }
}

//listeners
document.querySelector("#bp3").addEventListener("click",verifica3);
//funcoes
function verifica3(){
    if (document.querySelector("#p3opcao2").checked){
        document.querySelector("#resposta3").style.display="block";
        document.querySelector("#erro3").style.display="none";
        document.querySelector("#bp3").style.display="none";
    }
    else{
        document.querySelector("#erro3").style.display="block";
    }
}
