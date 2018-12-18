import React, { Component } from 'react';
import { Row, Col } from 'antd'
import './list.css'
import axios from 'axios'
class ArticleList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articleList: []
        }
    }

    componentDidMount() {
        // 452d304c0aab88403202651a261552e168bccb7b
        //  https://api.github.com https://api.github.com/issues
        axios.get('https://api.github.com/repos/HUGY1/my-front-end-blog/issues?access_token=452d304c0aab88403202651a261552e168bccb7b').then(res => {
            this.setState({
                articleList: res.data
            })
        })
    }

   
    render() {
        function List(props) {
            console.log(props)
            let list = props.group.map(item => 
                <Row className='m-item' gutter={0} key={item.id}>
                    <Col span={16} className='m-title'>
                        {item.title}
                    </Col>
                    <Col span={8} className='m-date'>
                        {item.created_at}
                    </Col>
                </Row>
            )
            return (
                <div>
                    {list}
                </div>
            )
        }
        return (
            <List group={this.state.articleList} />
        )
    }

}

export default ArticleList