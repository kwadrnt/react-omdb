import React, { Component } from 'react'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  onInputChange (event) {
    console.log('searching a movie')
    this.setState({
      query: event.target.value
    })
  }

  onFormSubmit (event) {
    event.preventDefault();
    console.log('form works!')
  }

  render(){
   return (
     <div>
       <form onSubmit={event => this.onFormSubmit(event)}>
         <input
           onChange={event => this.onInputChange(event)}
           placeholder='Search Movies ...'
           type='text'
           value={this.state.query} />
         <button type='submit'>Submit!</button>
       </form>
     </div>
   )
 }
}

export default Search
