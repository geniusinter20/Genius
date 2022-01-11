import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Products from './Product_Items';
import { Tabs, Input } from 'antd';
import "./ProductContainer.css";


const { SubMenu } = Menu;
const { Content, Sider } = Layout;
const { TabPane } = Tabs;
const TestsCategories = [
    {
        id: 1,
        title: "All",
        category: "ALL"
    },
    {
        id: 2,
        title: "PMP",
        category: "PMP"
    },
    {
        id: 3,
        title: "CAPM",
        category: "CAPM"
    }
];
const { Search } = Input;

function ProductContainer() {
    const [type, setType] = useState("ALL");
    const [category, setCategory] = useState("ALL");
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <Layout style={{ margin: "2vw 4vw 1vw 4vw", backgroundColor: "white", color: "#303030" }}>

            <Header>
                Premium selection of Practice Tests
            </Header>

            <Layout style={{ backgroundColor: "white" }}>
                <Sider width={200} style={{ backgroundColor: "white" }}>
                    <Menu
                        className='cmenu'
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ width: "200", height: '84vh' }}
                    >
                        <SubMenu on key="sub1" icon={<UserOutlined />} title="Type">
                            <MyMenueItem key="1" onClick={() => setType("ALL")}>All</MyMenueItem>
                            <MyMenueItem key="2" onClick={() => setType("FP")}>Full Package</MyMenueItem>
                            <MyMenueItem key="3" onClick={() => setType("PTO")}>Practice Test Only</MyMenueItem>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Rating">
                            <Menu.Item key="4">Ascending</Menu.Item>
                            <Menu.Item key="5">Descinding</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{
                    margin: "0vw 0vw 0vw 1vw", backgroundColor: "white",
                    color: "#303030"
                }}
                >
                    <Tabs tabBarExtraContent={<Search style={{ width: "23vw" }} onChange={event => setSearchTerm(event.target.value)}
                        size="default" placeholder="Search For Practice Test...." enterButton />}
                        style={{
                            margin: "0vw 0vw 0vw 2vw", backgroundColor: "white",
                            color: "#303030",
                            minHeight:"80vh"
                        }} defaultActiveKey="ALL"
                    >
                        <TabPane tab="All" key="ALL">
                            <Products searchTerm={searchTerm} type={type}></Products>
                        </TabPane>
                        <TabPane tab="PMP" key="PMP">
                            <Products searchTerm={searchTerm} category="PMP" type={type}></Products>
                        </TabPane>
                        <TabPane tab="CAPM" key="CAPM">
                            <Products searchTerm={searchTerm} category="CAPM" type={type}></Products>
                        </TabPane>

                    </Tabs>
                </Layout>
            </Layout>
        </Layout>
    )
}
const Header = styled.div`
margin-bottom: 2vw;
margin-top: 1vw;
font-size:clamp(30px, 2.5vw, 50px) ;
font-weight: 500;
`
const MyMenueItem = styled(Menu.Item)`
&>*{
  fill:#6C6C6C;
    color:#6C6C6C;
    font-weight: 600;
    margin: 5px 0 5px 0;
}
&:hover>*{
  animation: mmm 0.3s;
      animation-fill-mode: forwards;
}
@keyframes mmm {
    0% {
      color:#6C6C6C;
   }
     
   100% {
color: #5BCAD6;
   }
}
`
export default ProductContainer;