// Juego de Piedra, Papel o Tijera
<link rel="stylesheet" href="perfil.css"></link>
function jugarPiedraPapelTijera() {
    const opciones = ["Piedra", "Papel", "Tijera"];
    const eleccionUsuario = prompt("Elige: Piedra, Papel o Tijera").trim();
    const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    if (!opciones.includes(eleccionUsuario)) {
        console.log("Elección inválida. Intenta de nuevo.");
        return;
    }

    console.log(`Tú elegiste: ${eleccionUsuario}`);
    console.log(`La computadora eligió: ${eleccionComputadora}`);

    if (eleccionUsuario === eleccionComputadora) {
        console.log("¡Es un empate!");
    } else if (
        (eleccionUsuario === "Piedra" && eleccionComputadora === "Tijera") ||
        (eleccionUsuario === "Papel" && eleccionComputadora === "Piedra") ||
        (eleccionUsuario === "Tijera" && eleccionComputadora === "Papel")
    ) {
        console.log("¡Ganaste!");
    } else {
        console.log("Perdiste. ¡Suerte la próxima vez!");
    }
}

// Inicia el juego
jugarPiedraPapelTijera();