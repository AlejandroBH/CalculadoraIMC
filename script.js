let peso = document.querySelector("#peso");
let infoPeso = document.querySelector("#infoPeso");

let altura = document.querySelector("#altura");
let infoAltura = document.querySelector("#infoAltura");


peso.oninput = () => {
    infoPeso.innerHTML = peso.value;
}

altura.oninput = () => {
    infoAltura.innerHTML = altura.value;
}

