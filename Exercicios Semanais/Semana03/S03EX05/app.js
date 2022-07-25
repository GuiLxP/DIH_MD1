const paragrafo = document.getElementById("mostraTexto");

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function adicionaTexto() {
    const d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let time = h + ":" + m;
    paragrafo.innerText = time;
}

setTimeout(adicionaTexto, 1000);

let tempoTexto = window.setInterval(adicionaTexto, 1000);
