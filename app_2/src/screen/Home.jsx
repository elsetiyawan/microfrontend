import {Button} from "antd";
import {useState} from "react";

const Home = () => {

    const [counter, setCounter] = useState(0);

    return <center>
        <div style={{
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '300%',
            paddingTop: "50px"
        }}>
            <div>Application 2 Screen</div>
            <div>Score:</div>
            <div style={{margin: "50px"}}>{counter}</div>
            <div style={{
                display: "flex", alignItems: "center", justifyContent: "center"
            }}>
                <div style={{margin: "10px"}}>
                    <Button type={"primary"} shape={"circle"} onClick={() => setCounter(counter + 1)}>+</Button>
                </div>
                <div style={{margin: "10px"}}>
                    <Button type={"primary"} shape={"circle"} onClick={() => setCounter( counter - 1)} danger>-</Button>
                </div>
            </div>
        </div>
    </center>
}

export default Home;