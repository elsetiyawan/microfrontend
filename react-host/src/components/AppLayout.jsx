import React from 'react';
import {Link} from "react-router-dom";

const Layout = (props) => {
    return (
        <div>
            <div>
                <nav className='navbar'>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/remote_1">App Remote</Link></li>
                    </ul>
                </nav>
            </div>
            <div>{props.children}</div>
        </div>
    )
}

export default Layout;