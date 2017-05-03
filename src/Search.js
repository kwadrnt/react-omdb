import React, { Component } from 'react'

class Search extends Component {
  render(){
    let {inputChange, formSubmit, query} = this.props
   return (
     <div>
       <form onSubmit={ (event) => formSubmit(event)}>
         <input
           onChange={ (event) => inputChange(event)}
           placeholder='Search Movies ...'
           type='text'
           value={query} />
         <button type='submit'>Submit!</button>
       </form>
     </div>
   )
 }
}

export default Search
