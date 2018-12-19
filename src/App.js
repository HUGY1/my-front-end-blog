import React, { Component } from 'react'
import './App.css'
import Layout from './views/layout/layout'
class App extends Component {
  componentDidMount() {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=75269a7abb6d1982a49e&redirect_uri=https://hugy1.github.io/my-front-end-blog/#/article/list'
  }

  render() {
    return (
      <div className="App">
        <Layout>

        </Layout>
      </div>
    );
  }
}

export default App;
