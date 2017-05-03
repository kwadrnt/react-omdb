import React, { Component } from 'react'

class Search extends Component {
  render(){
   return (
     <div>
       <form>
         <input
           placeholder='Search Movies ...'
           type='text'
           value='' />
         <button type='submit'>Submit!</button>
       </form>
     </div>
   )
 }
}

export default Search
