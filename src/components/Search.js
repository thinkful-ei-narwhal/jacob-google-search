import React from 'react'

class Search extends React.Component {



    render() {
        console.log('query prop', this.props.query)
        return(
        <div className = 'search-form'>
           <form  onSubmit = {(e) =>
            {e.preventDefault(); 
            this.props.handleSubmit(e)
            }}>
                <label>
                    Search:  
                    <input type="text" value={this.props.query} onChange ={this.props.handleQuerySet} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {/* <label for = 'search-submit'> </label> */}
            {/* // <button onSubmit ={(e) => this.searchBook} className= 'search-submit'> Search </button> */}
            </div>
        )
    }
}


export default Search