import React, { Component } from 'react';
import { Layout } from 'antd'
import Header from '../header/header'
import { Route, HashRouter as Router } from "react-router-dom";
// import { IndexRoute } from 'react-router'
import './layout.css'
// 路由页面
import Detail from '../article/detail'
import About from '../about/about'
import ArticleList from '../article/list'
class layout extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Header></Header>
                    <Layout className='m-main'>
                        <Route path="/" exact component={ArticleList} />
                        <Route path="/article/detail/:number" component={Detail} />
                        <Route path="/about" component={About} />
                    </Layout>

                </Layout>
            </Router>

        )
    }

}

export default layout