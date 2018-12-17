import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd'
import './list.css'

class ArticleList extends Component {

    render() {

        return (
            <div>
                <Row className='m-item' gutter={0}>
                    <Col span={18} className='m-title'>
                        文章标题啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                </Col>
                    <Col span={4} className='m-date'>
                        2014.12.06
                </Col>
                </Row>
                <Row className='m-item' gutter={0}>
                    <Col span={18} className='m-title'>
                        文章标题啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                </Col>
                    <Col span={4} className='m-date'>
                        2014.12.06
                </Col>
                </Row>
                <Row className='m-item' gutter={0}>
                    <Col span={18} className='m-title'>
                        文章标题啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                </Col>
                    <Col span={4} className='m-date'>
                        2014.12.06
                </Col>
                </Row>
                <Row className='m-item' gutter={0}>
                    <Col span={18} className='m-title'>
                        文章标题啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                </Col>
                    <Col span={4} className='m-date'>
                        2014.12.06
                </Col>
                </Row>
            </div>



        )
    }

}

export default ArticleList