import { cols, rows, size } from '../../constants/constants';
import ActiveCoin from './../ActiveCoin';
import './DropZone.css';
import {use, useEffect, useState} from 'react' 
import Winner from './../Vencedor/Winner'

const DropZone = ({ nomesJogadores,setNomesJogadores, setStarted}) => {
    const [turn, setTurn] = useState(2)
    const [winner, setWinner] = useState(0); //bool - 0 ninguem venceu
    const [dropped, setDropped] = useState([]);

    //funcao para encontrar o vencedor
    const findWinner = () => {
        const p1 = dropped.filter(d => d.player === 1) 
        p1.forEach(({x , y}) => {
            if (p1.find(m => x === m.x + 1 && y === m.y) &&
                p1.find(m => x === m.x + 2 && y === m.y) &&
                p1.find(m => x === m.x + 3 && y === m.y)
            )
            setWinner(1)
            if (p1.find(m => x === m.x && y === m.y + 1) &&
                p1.find(m => x === m.x && y === m.y + 2) &&
                p1.find(m => x === m.x && y === m.y + 3)
            )
            setWinner(1)
            if (p1.find(m => x === m.x + 1 && y === m.y + 1 ) &&
                p1.find(m => x === m.x + 2 && y === m.y + 2) &&
                p1.find(m => x === m.x + 3 && y === m.y + 3)
            )
            setWinner(1)
            if (p1.find(m => x === m.x + 1 && y === m.y - 1) &&
                p1.find(m => x === m.x + 2 && y === m.y - 2) &&
                p1.find(m => x === m.x + 3 && y === m.y - 3)
            )
            setWinner(1)
        })

        const p2 = dropped.filter(d => d.player === 2) 
        p2.forEach(({x , y}) => {
            if (p2.find(m => x === m.x + 1 && y === m.y) &&
                p2.find(m => x === m.x + 2 && y === m.y) &&
                p2.find(m => x === m.x + 3 && y === m.y)
            )
            setWinner(2)
            if (p2.find(m => x === m.x && y === m.y + 1) &&
                p2.find(m => x === m.x && y === m.y + 2) &&
                p2.find(m => x === m.x && y === m.y + 3)
            )
            setWinner(2)
            if (p2.find(m => x === m.x + 1 && y === m.y + 1 ) &&
                p2.find(m => x === m.x + 2 && y === m.y + 2) &&
                p2.find(m => x === m.x + 3 && y === m.y + 3)
            )
            setWinner(2)
            if (p2.find(m => x === m.x + 1 && y === m.y - 1) &&
                p2.find(m => x === m.x + 2 && y === m.y - 2) &&
                p2.find(m => x === m.x + 3 && y === m.y - 3)
            )
            setWinner(2)
        })
    }

    const JogarNovamente = () => {
        setTurn(1)
        setDropped([])
        setWinner(0)
    }

    const ReporJogo = () => {
        setTurn(1)
        setDropped([])
        setWinner(0)
        setNomesJogadores({player1: '', player2: ''})
        setStarted(false)
    }

    useEffect(() => {
        if (dropped.length === rows*cols)
                setWinner(-1) 
        findWinner()
    }, [dropped.length])

    

    useEffect(() => {
        console.log(winner)
    }, [winner])

    return <div className="drop-zone">
        {dropped.map((m,i) => 
            <div key = {i}
                className={`p${m.player}`}
                style={{transform: `translate(${m.y*size}px, ${m.x*size+150}px`}}
            />    
            )}

        {
            winner
            ?  <Winner 
                    winner = {winner} 
                    JogarNovamente={JogarNovamente}  
                    nomesJogadores={nomesJogadores} 
                    reporJogo={ReporJogo}
                />
            : <ActiveCoin
                turn = {turn}
                dropped =  {dropped}
                setDropped =  {setDropped}
                setTurn = {setTurn}
            />
        }
    </div> //simple div (div interior)
}

export default DropZone