import React, { Component } from 'react';
import { Row, Col, } from 'antd'
import './list.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Skeleton } from 'antd'
class ArticleList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articleList: [],
            loading: true
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/repos/HUGY1/my-front-end-blog/issues').then(res => {
            this.setState({
                articleList: res.data,
                loading: false
            })
        })
    }

    render() {
        function List(props) {
            let list = props.group.map(item =>
                <Link to={`/article/detail/${item.number}`} key={item.id} >
                    <Row className='m-item' gutter={0}>
                        <Col span={16} className='m-title'>
                            {item.title}
                        </Col>
                        <Col span={8} className='m-date'>
                            {item.created_at}
                        </Col>
                    </Row>
                </Link>

            )
            return (
                <div>
                    {list}
                </div>
            )
        }
        return (
            <Skeleton loading={this.state.loading} title={false} paragraph={{ rows: 5,width: ['100%'] }}>
                <List group={this.state.articleList} />
            </Skeleton>

        )
    }

}

export default ArticleList