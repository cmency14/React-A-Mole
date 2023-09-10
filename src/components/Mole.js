import React, {useEffect} from 'react';
import moleImg from '../mole.png';

const Mole = (props) => {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000);
        let timer = setTimeout(() => {
                props.toggle(false);
        }, randSeconds)
        return() => clearTimeout(timer)
    });

    return(
            <div>
                <img style={{'width': '30wv'}}
                src={moleImg} 
                onClick={props.handleClick} 
                alt="Mole"
                />
            </div>
    );
};

export default Mole;