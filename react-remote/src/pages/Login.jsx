import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return <div className='loginScreen'>
        <div className='loginWrapper'>
            <center>
                <div>This is the login screen for remote app</div>
                <div>
                    <button><Link to={"/home"}>Take me home!</Link></button>
                </div>
            </center>
        </div>
    </div>
}

export default Login;