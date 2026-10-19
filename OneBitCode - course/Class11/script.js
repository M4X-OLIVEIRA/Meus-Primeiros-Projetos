const playerName = document.getElementById("nomeJogador")
const playerPosition = document.getElementById("posicaoJogador")
const playerNumber = document.getElementById("numeroJogador")
const addButton = document.getElementById("addJogador")


addButton.addEventListener("click", function () {

    alert(`Nome: ${playerName.value}\nPosição: ${playerPosition.value}\nNumero do jogador: ${playerNumber.value}`)
    const confirmation = confirm("Deseja escalar esse jogador pro time ?")

    if (confirmation) {
        alert(playerName.value + " foi escalado para o time")
        const newplayer = document.createElement("li")
        newplayer.textContent = `Nome: ${playerName.value} é o novo ${playerPosition.value}\n camisa ${playerNumber.value}`
        const playerList = document.getElementById("listaJogadores")
        playerList.appendChild(newplayer)

    } else {
        alert(playerName.value + " não foi escalado para o time")
    }
})

