import React from 'react';

const Layout = (props) => {
    return (
        <div>
            <div>
                <nav className='navbar'>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>App Remote</a></li>
                    </ul>
                </nav>
            </div>
            <div>{props.children}</div>
        </div>
    )
}

export default Layout;