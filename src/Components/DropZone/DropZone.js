import { cols, rows, size } from '../../constants/constants';
import ActiveCoin from './../ActiveCoin';
import './DropZone.css';
import { useEffect, useState } from 'react';
import { findWinner } from './../VerificarVencedor/verf';

const DropZone = ({ nomesJogadores, setNomesJogadores, setStarted, setWinner }) => {
  const [turn, setTurn] = useState(2);
  const [dropped, setDropped] = useState([]);

  const JogarNovamente = () => {
    setTurn(1);
    setDropped([]);
    setWinner(0); // Resetando o vencedor
  };

  const ReporJogo = () => {
    setTurn(1);
    setDropped([]);
    setWinner(0);
    setNomesJogadores({ player1: '', player2: '' });
    setStarted(false);
  };

  useEffect(() => {
    const gameWinner = findWinner(dropped, rows, cols);
    setWinner(gameWinner); // Atualizando o vencedor no App.js
  }, [dropped, setWinner]);

  return (
    <div className="drop-zone">
      {dropped.map((m, i) => (
        <div
          key={i}
          className={`p${m.player}`}
          style={{ transform: `translate(${m.y * size}px, ${m.x * size + 150}px)` }}
        />
      ))}
      <ActiveCoin turn={turn} dropped={dropped} setDropped={setDropped} setTurn={setTurn} />
    </div>
  );
};

export default DropZone;
