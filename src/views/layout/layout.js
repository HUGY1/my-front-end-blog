import React, { Component } from 'react';
import { Layout } from 'antd'
import Header from '../header/header'
import { Route , HashRouter} from "react-router-dom";
import './layout.css'
// 路由页面
import Detail from '../article/detail'
import ArticleList from '../article/list'
class layout extends Component {
    render() {
        return (
            <HashRouter>
                <Layout>
                    <Header></Header>
                    <Layout className='m-main'>
                        <Route path="/article/detail" component={Detail} />
                        <Route path="/article/list" component={ArticleList} />
                    </Layout>

                </Layout>
            </HashRouter>

        )
    }

}

export default layout