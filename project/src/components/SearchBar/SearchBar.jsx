import React, { Component } from 'react'
//component
// import Button from '../Button/Button'
// import Input from '../Input/Input'
//styles
import './SearchBar.scss'

class SearchBar extends Component{
    state = {
      query: '',
}
    handleChange = (e) => {
    this.setState({query:e.currentTarget.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.query)
        this.setState({query:''})
    }

    render() {
        return (
     <header className="Searchbar">
  <form className="SearchForm" onSubmit={this.handleSubmit}>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      value={this.state.query}
      onChange={this.handleChange}                  
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }
}
export default SearchBar