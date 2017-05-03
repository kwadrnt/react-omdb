import React, { Component } from 'react'
import Search from './Search'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  inputChange () {
    console.log('searching a movie')
    this.setState({
      query: event.target.value
    })
  }

  formSubmit () {
    event.preventDefault();
    console.log('form works!')
  }

  render(){
   return (
     <div>
       <Search
          query={this.state.query}
          inputChange={ (event) => this.inputChange(event)}
          formSubmit={ (event) => this.formSubmit(event)}
          />
     </div>
   )
  }
  }

  export default SearchContainer
