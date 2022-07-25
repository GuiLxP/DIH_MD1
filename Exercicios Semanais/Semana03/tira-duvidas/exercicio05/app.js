console.log('Ex. 5 | M1S03')

const pRelogio = document.getElementById('p-relogio')

function atualizaRelogio() {
  // cria uma instância da data e hora atual
  const agora = new Date()
  // converte essa instância para HH:MM:SS
  pRelogio.innerText = agora.toLocaleTimeString()
}

// atualiza relógio a cada segundo (1000ms)
setInterval(atualizaRelogio, 1000)

// referência:
// https://stackoverflow.com/questions/18229022/how-to-show-current-time-in-javascript-in-the-format-hhmmss
