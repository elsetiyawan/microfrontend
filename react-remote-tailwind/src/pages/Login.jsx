import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return <div className='loginScreen'>
        <div className='loginWrapper'>
            <center>
                <div>This is the login screen for remote app</div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to={"/home"}>Take me home!</Link></button>
                </div>
            </center>
        </div>
    </div>
}

export default Login;