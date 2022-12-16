import React from 'react';
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import {Outlet, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import ReactRemote from "./pages/ReactRemote";
import ReactRemoteAntd from "./pages/ReactRemoteAntd";
import ReactRemoteTailwind from "./pages/ReactRemoteTailwind";

const App = () => {
    return <Routes>
        <Route path='/' element={<Login/>}/>
        <Route element={<AppLayout><Outlet/></AppLayout>}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/react-remote" element={<ReactRemote/>}/>
            <Route path="/react-remote-antd" element={<ReactRemoteAntd/>}/>
            <Route path="/react-remote-tailwind" element={<ReactRemoteTailwind/>}/>
        </Route>
    </Routes>;

}

export default App;
