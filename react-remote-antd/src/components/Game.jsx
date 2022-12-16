import React, {useState} from 'react';
import {Button} from "antd";

const Game = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div style={{
            fontSize: '20px',
        }}>
            <div className="alignCenter">Ant Remote Counter</div>
            <div className="alignCenter">{counter}</div>
            <div className='actionButtonWrapper'>
                <div>
                    <Button type="primary" shape="circle" onClick={() => setCounter(counter + 1)}>+</Button>
                </div>
                <div>
                    <Button type="primary" shape="circle" danger onClick={() => setCounter(counter - 1)}>-</Button>
                </div>
            </div>
        </div>
    )
}

export default Game;