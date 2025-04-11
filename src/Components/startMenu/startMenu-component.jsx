import React, { useState } from 'react'
import './startMenu.css'


const StartMenu = ({ onStart}) => {

    /*constantes*/
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');

    const handleStart = () => {
        /*verificação trim verifica se existem caractres ou apenas espaço em*/
        if (player1.trim() && player2.trim()) {
            onStart({ player1, player2 });
        } else {
            alert('Por favor, introduza os nomes dos jogadores');
        }
    }
    
    return (
        <div className="start-menu">
            <h1>4 em linha</h1>
            <div>
                <input
                    type='text'
                    placeholder='Nome do Jogador 1'
                    value={player1}
                    onChange={(e) => setPlayer1(e.target.value)}
                />
            </div>
            <div>
                <input
                    type='text'
                    placeholder='Nome do Jogador 2'
                    value={player2}
                    onChange={(e) => setPlayer2(e.target.value)}
                /> 
            </div>
            <button onClick={handleStart}>Começar Jogo</button>
        </div>
    )
}

export default StartMenu