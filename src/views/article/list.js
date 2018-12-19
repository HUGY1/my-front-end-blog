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

        this.code = getQuery('code')
        function getQuery(name) {
            let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            let r = props.location.search.substr(1).match(reg);
            if (r !== null) return unescape(r[2]);
            return null;
        }
    }

    componentDidMount() {
        let _this = this
        console.log(_this.code)
        axios.post('https://github.com/login/oauth/access_token', {
            'client_id': '75269a7abb6d1982a49e',
            'client_secret': '596001e772342f0bd84a8c9d0becc62df5be1aba',
            'code': _this.code
        }).then(res => {
            console.log(res)
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