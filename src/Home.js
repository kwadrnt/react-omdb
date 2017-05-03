import React, { Component } from 'react'
import './index.css'
import SearchContainer from './SearchContainer'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <SearchContainer />
      </div>
    );
  }
}

export default Home
