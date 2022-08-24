let weight = document.querySelector("#weight");
let infoWeight = document.querySelector("#infoWeight");
let height = document.querySelector("#height");
let infoHeight = document.querySelector("#infoHeight");

let imcBar = document.querySelector("#imc-bar");


let sexMan = document.querySelector("#sex-man");
let sexWoman = document.querySelector("#sex-woman");
let infoTitle = document.querySelector(".info-title");
let btnCalc = document.querySelector("#calculate-imc");
let sex = "man";
iconSex(1);

function iconSex(select){
    switch(select){
        case 1:
            document.getElementById("sex-man").style.backgroundColor="#04AA6D";
            document.getElementById("sex-woman").style.backgroundColor="rgba(0, 0, 0, 0)";
        break;
        case 2:
            document.getElementById("sex-man").style.backgroundColor="rgba(0, 0, 0, 0)";
            document.getElementById("sex-woman").style.backgroundColor="#04AA6D";
        break;
    }
}

function selectMan(){
    sex = "man";
    console.log(sex);
    iconSex(1);
    return sex;
}

function selectWoman(){
    sex = "woman";
    console.log(sex);
    iconSex(2);
    return sex;
}

function calcImc(){
    let result = Math.round(weight.value / (height.value * height.value));

    if(sex=="man"){
        console.log(result + " man");
        infoTitle.innerHTML = "Sexo Masculino";
        imcBar.value = result;
        return result;
    }
    if(sex=="woman"){
        console.log(result + " woman");
        infoTitle.innerHTML = "Sexo Femenino";
        return result;
    }
}

weight.oninput = () => {
    infoWeight.innerHTML = weight.value;
}

height.oninput = () => {
    infoHeight.innerHTML = height.value;
}

document.getElementById("information-off").style.display = "none";

sexMan.onclick = selectMan;
sexWoman.onclick = selectWoman;

btnCalc.onclick = calcImc;
