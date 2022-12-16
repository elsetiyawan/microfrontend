import React from 'react';
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import {Outlet, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
    return <Routes>
        <Route path='/' element={<Login/>}/>
        <Route element={<AppLayout><Outlet/></AppLayout>}>
            <Route path="/home" element={<Home/>}/>
        </Route>
    </Routes>;
    // return <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
}

export default App;
