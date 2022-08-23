let peso = document.querySelector("#peso");
let infoPeso = document.querySelector("#infoPeso");

let altura = document.querySelector("#altura");
let infoAltura = document.querySelector("#infoAltura");

let sexMan = document.querySelector("#sex-man");
let sexWoman = document.querySelector("#sex-woman");

function selectMan(){
    let sexo = "man";
    console.log(sexo);
    document.getElementById("sex-man").style.backgroundColor="#04AA6D";
    document.getElementById("sex-woman").style.backgroundColor="rgba(0, 0, 0, 0)";
    return sexo;
}

function selectWoman(){
    let sexo = "woman";
    console.log(sexo);
    document.getElementById("sex-man").style.backgroundColor="rgba(0, 0, 0, 0)";
    document.getElementById("sex-woman").style.backgroundColor="#04AA6D";
    return sexo;
}

peso.oninput = () => {
    infoPeso.innerHTML = peso.value;
}

altura.oninput = () => {
    infoAltura.innerHTML = altura.value;
}

sexMan.onclick = selectMan;
sexWoman.onclick = selectWoman;
