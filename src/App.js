import { useState } from 'react';
import './App.css';
import Board from './Components/Tabela/Board';
import DropZone from './Components/DropZone/DropZone';
import StartMenu from './Components/startMenu/startMenu-component';
import WinnerPopup from './Components/popUpVencedor/popUp';

function App() {
  const [started, setStarted] = useState(false); // Estado inicial
  const [nomesJogadores, setNomesJogadores] = useState({ player1: '', player2: '' });
  const [winner, setWinner] = useState(0); // Estado para armazenar o vencedor

  const startGame = (names) => {
    setNomesJogadores(names);
    setStarted(true);
  };

  const JogarNovamente = () => {
    setStarted(false);
    setWinner(0);
  };

  const ReporJogo = () => {
    setStarted(false);
    setWinner(0);
    setNomesJogadores({ player1: '', player2: '' });
  };

  return (
    <div className="App">
      {!started ? (
        <StartMenu onStart={startGame} />
      ) : (
        <>
          <DropZone
            nomesJogadores={nomesJogadores}
            setNomesJogadores={setNomesJogadores}
            setStarted={setStarted}
            setWinner={setWinner} // Passando o setWinner para DropZone
          />
          <Board />
        </>
      )}

      {winner !== 0 && (
        <WinnerPopup
          winner={winner}
          nomesJogadores={nomesJogadores}
          jogarNovamente={JogarNovamente}
          reporJogo={ReporJogo}
        />
      )}
    </div>
  );
}

export default App;
