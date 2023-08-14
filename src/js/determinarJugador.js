export function determinarGanador(jugador1, jugador2) {
    if (jugador1 === jugador2) {
      return "Empate";
    } else if (
      (jugador1 === 1 && jugador2 === 2) ||
      (jugador1 === 2 && jugador2 === 3) ||
      (jugador1 === 3 && jugador2 === 1)
    ) {
      return "Haz ganado";
    } else {
      return "Pc ha ganado";
    }
  }
  