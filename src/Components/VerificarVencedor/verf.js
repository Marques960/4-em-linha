// WinnerChecker.js

const checkVictoryForPlayer = (player, dropped, rows, cols) => {
    const playerMoves = dropped.filter(d => d.player === player);

    return playerMoves.some(({ x, y }) => {
        // Verificação horizontal
        if (playerMoves.find(m => x === m.x + 1 && y === m.y) &&
            playerMoves.find(m => x === m.x + 2 && y === m.y) &&
            playerMoves.find(m => x === m.x + 3 && y === m.y)) return true;

        // Verificação vertical
        if (playerMoves.find(m => x === m.x && y === m.y + 1) &&
            playerMoves.find(m => x === m.x && y === m.y + 2) &&
            playerMoves.find(m => x === m.x && y === m.y + 3)) return true;

        // Verificação diagonal descendente
        if (playerMoves.find(m => x === m.x + 1 && y === m.y + 1) &&
            playerMoves.find(m => x === m.x + 2 && y === m.y + 2) &&
            playerMoves.find(m => x === m.x + 3 && y === m.y + 3)) return true;

        // Verificação diagonal ascendente
        if (playerMoves.find(m => x === m.x + 1 && y === m.y - 1) &&
            playerMoves.find(m => x === m.x + 2 && y === m.y - 2) &&
            playerMoves.find(m => x === m.x + 3 && y === m.y - 3)) return true;

        return false;
    });
};

const findWinner = (dropped, rows, cols) => {
    // Verificar se o jogador 1 venceu
    if (checkVictoryForPlayer(1, dropped, rows, cols)) return 1;
    
    // Verificar se o jogador 2 venceu
    if (checkVictoryForPlayer(2, dropped, rows, cols)) return 2;
    
    // Verificar se o jogo acabou em empate
    if (dropped.length === rows * cols) return -1;

    return 0;  // Nenhum vencedor ainda
};

export { findWinner };
