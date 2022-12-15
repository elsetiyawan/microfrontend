import {Link} from "react-router-dom";

const Login = () => {
    return <center>
        <div style={{paddingTop: "50px"}}>
            <div style={{margin: "30px"}}>App 2 Login</div>
            <Link to={"/home"}>
                <button>Take Me Home</button>
            </Link>
        </div>
    </center>
}

export default Login;