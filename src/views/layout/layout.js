import React, { Component } from 'react';
import { Layout } from 'antd'
import Header from '../header/header'
import { Route, BrowserRouter as Router } from "react-router-dom";
// import { IndexRoute } from 'react-router'
import './layout.css'
// 路由页面
import Detail from '../article/detail'
import ArticleList from '../article/list'
class layout extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Header></Header>
                    <Layout className='m-main'>
                        <Route path="/my-front-end-blog/" exact component={ArticleList}>
                            
                        </Route>
                        <Route path="/my-front-end-blog//article/detail/:number" component={Detail} />
                    </Layout>

                </Layout>
            </Router>

        )
    }

}

export default layout