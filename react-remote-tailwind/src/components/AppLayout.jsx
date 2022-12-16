import React from 'react';
import {Link} from "react-router-dom";

const Layout = (props) => {
    return (
        <div>
            <div>
                <nav className='bg-gray-50 dark:bg-gray-700'>
                    <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                        <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                            <li><Link className="text-gray-900 dark:text-white hover:underline" to="/home">Home</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div>{props.children}</div>
        </div>
    )
}

export default Layout;