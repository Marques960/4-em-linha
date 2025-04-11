// WinnerPopup.js
import React from 'react';
import './popUp.css';

const WinnerPopup = ({ winner, nomesJogadores, jogarNovamente, reporJogo }) => {
    return (
        <div className="winner-popup">
            <div className="winner-message">
                {winner === -1
                    ? <span>Ninguém venceu! (Empate)</span>
                    : <span>O jogador {winner === 1 ? nomesJogadores.player1 : nomesJogadores.player2} venceu!</span>
                }
            </div>
            <div className="ct-opcoes-pos-jogo">
                <button onClick={jogarNovamente}>Jogar Novamente</button>
                <button onClick={reporJogo}>Reiniciar Jogo</button>
            </div>
        </div>
    );
}

export default WinnerPopup;
