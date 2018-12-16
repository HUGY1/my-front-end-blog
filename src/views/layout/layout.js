import React, { Component } from 'react';
import { Layout } from 'antd'
import Header from '../header/header'
import { Route , BrowserRouter} from "react-router-dom";
// 路由页面
import Detail from '../article/detail'
import ArticleList from '../article/list'
class layout extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Header></Header>
                    <Layout>
                        <Route path="/article/detail" component={Detail} />
                        <Route path="/article/list" component={ArticleList} />
                    </Layout>

                </Layout>
            </BrowserRouter>

        )
    }

}

export default layout