let btnMenu = document.getElementById('btn-open-menu')
let menu = document.getElementById('menu-mobile')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

function leiaMais(){
    let pontos=document.getElementById("pontos");
    let maisTexto=document.getElementById("mais");
    let btnLeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){ 
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="SEE MORE";

    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="SEE LESS";
    }
}

function leiaMaisA(){
    let pontosA=document.getElementById("pontosA");
    let maisTextoA=document.getElementById("maisA");
    let btnLeiaMaisA=document.getElementById("btnLeiaMaisA");

    if(pontosA.style.display === "none"){ 
        pontosA.style.display="inline";
        maisTextoA.style.display="none";
        btnLeiaMaisA.innerHTML="SEE MORE";

    }else{
        pontosA.style.display="none";
        maisTextoA.style.display="inline";
        btnLeiaMaisA.innerHTML="SEE LESS";
    }
}


function leiaMaisB(){
    let pontosB=document.getElementById("pontosB");
    let maisTextoB=document.getElementById("maisB");
    let btnLeiaMaisB=document.getElementById("btnLeiaMaisB");

    if(pontosB.style.display === "none"){ 
        pontosB.style.display="inline";
        maisTextoB.style.display="none";
        btnLeiaMaisB.innerHTML="SEE MORE";

    }else{
        pontosB.style.display="none";
        maisTextoB.style.display="inline";
        btnLeiaMaisB.innerHTML="SEE LESS";
    }
}

function leiaMaisC(){
    let pontosC=document.getElementById("pontosC");
    let maisTextoC=document.getElementById("maisC");
    let btnLeiaMaisC=document.getElementById("btnLeiaMaisC");

    if(pontosC.style.display === "none"){ 
        pontosC.style.display="inline";
        maisTextoC.style.display="none";
        btnLeiaMaisC.innerHTML="SEE MORE";

    }else{
        pontosC.style.display="none";
        maisTextoC.style.display="inline";
        btnLeiaMaisC.innerHTML="SEE LESS";
    }
}

function leiaMaisD(){
    let pontosD=document.getElementById("pontosD");
    let maisTextoD=document.getElementById("maisD");
    let btnLeiaMaisD=document.getElementById("btnLeiaMaisD");

    if(pontosD.style.display === "none"){ 
        pontosD.style.display="inline";
        maisTextoD.style.display="none";
        btnLeiaMaisD.innerHTML="SEE MORE";

    }else{
        pontosD.style.display="none";
        maisTextoD.style.display="inline";
        btnLeiaMaisD.innerHTML="SEE LESS";
    }
}