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
}

export default App;
