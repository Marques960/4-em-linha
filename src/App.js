import { useState } from 'react';
import './App.css';
import Board from  './Components/Tabela/Board'
import DropZone from './Components/DropZone/DropZone'
import Winner from './Components/Vencedor/Winner'
import StartMenu from './Components/startMenu/startMenu-component';

function App() {

  const [started, setStarted] = useState(false); /*state inicial*/
  const [nomesJogadores, setNomesJogadores] = useState({player1 : '', player2 : ''});

  const startGame = (names) => {
    /*requisitos para iniciar jogo*/
    setNomesJogadores(names);
    setStarted(true);
  } 

  return (
    <div className="App">
      {!started ? (
        <StartMenu onStart={startGame}/>
      ) : (
        <>
          <DropZone 
            nomesJogadores={nomesJogadores} 
            setNomesJogadores = {setNomesJogadores}
            setStarted={setStarted}
          />
          <Board />
        </>
      )}
    </div>
  );
}

export default App;
