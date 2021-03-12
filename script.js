// ## Controle de fluxo da aplicação ##
const btn = document.querySelector('#btn');
const result = document.querySelector('#resultado');


btn.addEventListener("click", (e) => {
    e.preventDefault();
    const temp = document.querySelector('#temp').value;

    const highTemp = temp >= 37.5;
    const mediumTemp = temp < 37.5 && temp >= 37;

    if (highTemp) {
        result.innerHTML = "Febre alta";
        result.style.color = "#ff0000";
    } else if (mediumTemp) {
        result.innerHTML = "Febre moderada";
        result.style.color = "#dac404";
    } else {
        result.innerHTML = "Saudável";
        result.style.color = "#047404";
    }
})
