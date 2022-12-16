import React, {useState} from 'react';

const Game = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div style={{
            fontSize: '20px',
        }}>
            <div className="alignCenter">Container Counter</div>
            <div className="alignCenter">{counter}</div>
            <div className='actionButtonWrapper'>
                <div>
                    <button className="actionButton" onClick={() => setCounter(counter + 1)}>+</button>
                </div>
                <div>
                    <button className="actionButton" onClick={() => setCounter(counter - 1)}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Game;