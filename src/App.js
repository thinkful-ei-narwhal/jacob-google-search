import React from 'react';
import Search from './components/Search'
import BookList from './components/books/BookList'
import Filter from './components/Filter'


import './App.css'


const url = 'https://www.googleapis.com/books/v1/volumes?q='


class App extends React.Component {

  constructor(props) {
    super(props) 
      this.state = {
        books: [],
        loading: false,
        bookFilter: '',
        typeFilter: '',
        query: '',
      }
      // this.submitSearch = this.submitSearch.bind(this);
      
  }

  //

  submitSearch = () => {
    this.setState({loading: true})
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.query}?printType=${this.state.bookFilter}?filter=${this.state.typeFilter}`)
      .then(res => {
        if(!res.ok) {
          throw new Error('Please try again :) ')
        } return res.json();
      })
      .then(res => res.items)
      .then(res => { 
        const books = res
        this.setState({
          loading: false,
          books: books,
        })
      })
  }

setQuery = (e) => {
  this.setState({
    query: e.target.value
  })
}

setPrintFilter = (e) => {
    this.setState({
      bookFilter: e.target.value,
      // query: this.state.printFilter,
      // typeFilter: this.state.typeFilter
    })
  }

setTypeFilter = (e) => {
    this.setState({
      typeFilter: e.target.value,
      // printFilter: this.state.printFilter,
      // query: this.state.query
    })
  }

  render() {
  console.log(this.state.books)

    return (
      <div className="App">
          <h1> Google Book Search </h1>
          <Search 
          handleQuerySet = {this.setQuery}
          handleSubmit = {this.submitSearch}
          query = {this.state.query}
          /> 
          <Filter 
          setPrintFilter = {this.setPrintFilter}
          setTypeFilter = {this.setTypeFilter}
            />
          <BookList
          books = {this.state.books}

          /> 
      </div>
    );
  }

}

export default App;
