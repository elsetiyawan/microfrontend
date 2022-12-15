import {Outlet, Route, Routes} from "react-router-dom";
import Home from "./screen/Home";
import AppLayout from "./layout/AppLayout";
import Login from "./screen/Login";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route element={<AppLayout> <Outlet/> </AppLayout>}>
                <Route path="/home" element={<Home/>}/>
            </Route>

        </Routes>
    );
};

export default App;
