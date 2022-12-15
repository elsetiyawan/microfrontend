import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";

const {Content, Header, Footer} = Layout;

const menuItems = [
    {
        key: "app1",
        label: <Link to={"/home"}>App 1</Link>,
    },
    {
        key: "app2",
        label: <Link to={"/app2"}>App 2</Link>,
    },
    {
        key: "app3",
        label: <Link to={"/app3"}>App 3</Link>,
    },
];
const AppLayout = (props) => {
    return (
        <Layout>
            <Header>
                <div/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["app1"]}
                    items={menuItems}
                />
            </Header>
            <Content style={{padding: "0 50px"}}>
                <div
                    className="site-layout-content"
                    style={{background: "#ffffff", height: "500px"}}
                >
                    {props.children}
                </div>
            </Content>
            <Footer style={{textAlign: "center"}}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default AppLayout;
