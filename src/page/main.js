


import { Component } from 'react';
import { Layout, Menu } from 'antd';
import Link from 'umi/link';


import { PieChartOutlined } from '@ant-design/icons';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
} from '@ant-design/icons';
import MenuItem from '_antd@4.16.3@antd/lib/menu/MenuItem';

const { Header, Footer, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu;

class Main extends Component {

    state = {
        showSider: true
    }




    hideSider = () => {
        this.setState({
            showSider: !this.state.showSider,

        });
    }


    render() {
        return (
            <Layout>
                {this.state.showSider &&
                    (<Sider width={256} style={{ minHeight: '100vh', color: 'white', textAlign: 'center', }}>

                        <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }} />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                            <Menu.Item key="1">
                                <Link to="/">
                                    <HomeOutlined />
                                    <span>Helloworld</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="puzzleCardsPage">
                                <Link to="/puzzleCardsPage">
                                    <SmileOutlined />
                                    <span>puzzleCardsPage</span>
                                </Link>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={<span><SettingFilled /><span>Dashboard</span></span>}
                            >
                                <Menu.Item key="2">分析页</Menu.Item>
                                <Menu.Item key="3">监控页</Menu.Item>
                                <Menu.Item key="4">
                                    <Link to='/square'>
                                        Square
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>

                    </Sider>)}

                <Layout style={{ height: '100vh' }}>
                    <Header onClick={this.hideSider} style={{ background: '#fff', textAlign: 'center', padding: '0' }}>Header</Header>
                    <Content style={{ margin: '18px 18px 0' ,overflow:'auto' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

                </Layout>


            </Layout>


        );
    }
}

export default Main;