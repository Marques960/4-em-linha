import { size } from '../constants/constants';
import './DropZone.css';
import {useState} from 'react' 

const DropZone = () => {
    const [turn, setTurn] = useState(2);
    const [dropped, setDropped] = useState([
        {x: 5, y: 4, player: 1},
        //{x: 4, y: 1, player: 2},
        //{x: 3, y: 2, player: 2},
        //{x: 1, y: 3, player: 1}
        
    ]);

    return <div className="drop-zone">
        {dropped.map((m,i) => 
            <div key = {i}
                className={`p${m.player}`}
                style={{transform: `translate(${m.y*size}px, ${m.x*size+150}px`}}
            />    
            )}

        <div className={`p${turn}`}/>  
    </div> //simple div (div interior)
}

export default DropZone