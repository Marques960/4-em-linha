const Winner = ({winner, jogarNovamente, nomesJogadores, reporJogo}) => {
    return <div className="winner-popup">
        <div> 
            {winner === -1
            ? <span>Nobody Won</span>
            : <span>O jogador {winner === 1 ? nomesJogadores.player1 : nomesJogadores.player2} venceu</span>
            } 
            <div className="ct-opcoes-pos-jogo">
                <button onClick={jogarNovamente}>Jogar Novamente</button>
                <button onClick={reporJogo}>Reiniciar Jogo</button>
            </div>
        </div>
    </div>
    
}

export default Winner