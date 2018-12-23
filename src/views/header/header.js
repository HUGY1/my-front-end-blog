import React, { Component } from 'react';
import './header.css';
import { Layout, Menu, Icon } from 'antd'
import {
    NavLink,
} from "react-router-dom";


class Header extends Component {
    state = {
        current: 'mail',
    }


    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Layout.Header className='g-header'>
                <h1 className='m-title'>Welcome to my Blog</h1>
                <Menu className='m-head'
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal">
                    <Menu.Item className='u-item' key="mail"><NavLink to="/article/list"><Icon type="solution" />我的文章</NavLink></Menu.Item>
                    <Menu.Item className='u-item' key="alipay"><NavLink to="/article/detail"><Icon type="user" />关于我</NavLink></Menu.Item>
                </Menu>
            </Layout.Header>


        )
    }

}

export default Header