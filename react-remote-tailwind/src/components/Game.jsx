import React, {useState} from 'react';

const Game = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <div className="text-center text-[24px] pb-5">Tailwind Remote Counter</div>
            <div className="text-center text-[24px] pb-5">{counter}</div>
            <div className='flex justify-center'>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
                            onClick={() => setCounter(counter + 1)}>+
                    </button>
                </div>
                <div>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-5"
                            onClick={() => setCounter(counter - 1)}>-
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Game;