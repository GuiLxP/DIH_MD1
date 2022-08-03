const p = document.querySelector("#pDisplay");
const input = document.querySelector("#inputA");
let btnA = document.querySelector("#btnA");

const mensagemOla = (nome) => {
    nome = input.value;

    p.animate(
        {
            opacity: [0, 0.9, 1],
            offset: [0, 0.8], // Shorthand de [ 0, 0.8, 1 ]
            easing: ["ease-in", "ease-out"],
        },
        2000
    );
    p.innerHTML = `Olá ${nome}!`;
    input.value = "";
};

btnA.addEventListener("click", mensagemOla);
