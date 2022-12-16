import React from 'react';
import Game from "../components/Game";

const Home = () => {
    return (
        <div className='wrapper'>
            <div className='screenSegment'>Description</div>
            <div className='screenSegment'><Game/></div>
        </div>
    );
}

export default Home;
