import React, { Component } from 'react'
import './App.css'
import Layout from './views/layout/layout'
class App extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (

      <div className="App">
        <Layout></Layout>
      </div>
    );
  }
}


export default App;
