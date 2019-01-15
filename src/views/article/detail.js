import React, { Component } from 'react';
import axios from 'axios'
import './detail.css'
import marked from 'marked'

class Detail extends Component {
    constructor(props){
        super(props)
        this.state = {
            number: props.match.params.number,
            body: '',
            html_url: '',
            updated_at: ''
        }
    }
    componentDidMount() {
        axios.get(`https://api.github.com/repos/HUGY1/my-front-end-blog/issues/${this.state.number}`).then(res => {
            let body = marked(res.data.body)
            let {html_url,updated_at} = res.data
            this.setState({
                body,
                html_url,
                updated_at
            })
        })
    }
    render() {
        return (
            <div className='m-body' >
                <article dangerouslySetInnerHTML={{__html: this.state.body}}></article>
                <p>更新时间：{this.state.updated_at}</p>
                <a href={this.state.html_url} target='_blank' rel="noopener noreferrer">前往issue</a>
                <div className='m-comment'>
                </div>
            </div>
        )
    }

}

export default Detail