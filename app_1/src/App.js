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
                <Route path="/app2" element={<p>App 2</p>}/>
                <Route path="/app3" element={<p>App 3</p>}/>
            </Route>

        </Routes>
    );
};

export default App;
