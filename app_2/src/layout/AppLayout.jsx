import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";

const {Content, Header, Footer} = Layout;

const menuItems = [
    {
        key: "homne",
        label: <Link to={"/home"}>Home</Link>,
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
                    defaultSelectedKeys={["home"]}
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
