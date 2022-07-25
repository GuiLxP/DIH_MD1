setTimeout
    const nome = document.querySelector("inputText");
    const btnA = document.querySelector("btnA");
    const pDisplay = document.querySelector("pDisplayContent");

    const mensagemOla = (nome) => {
        nome = nome.value;
        pDisplay.innerHTML = `Olá, ${nome}!`;
        return
    };

    btnA.addEventListener("click", mensagemOla);
