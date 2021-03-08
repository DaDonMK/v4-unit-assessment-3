import React, {Component} from 'react'
import './App.css';
import BookList from './Components/BookList';
import Header from './Components/Header'
import Shelf from './Components/Shelf';
import {data} from './data'
import SearchBar from './Components/SearchBar'

class App extends Component {

  constructor(){
    super()

    this.state = {
      books : data,
      shelf : []
    }
     this.addToShelf = this.addToShelf.bind(this)
     this.clearShelf = this.clearShelf.bind(this)
     this.filterBooks = this.filterBooks.bind(this)
     this.reset = this.reset.bind(this)
  }
  
  addToShelf(title){
    let count = 1
    let newShelf = this.state.shelf
    for(var i = 0; i < newShelf.length; i++){
      if(newShelf[i] === title){
        count = 0
      }
    }
    if(count === 1){
      newShelf.push(title)
    }
    this.setState({shelf: newShelf})
  }

  clearShelf(){
    this.setState({shelf: []})
  }
  
  filterBooks(input){
    let filteredBooks = this.state.books.filter((element)=>{
      return (element.title.includes(input) || element.author.includes(input))
    })
    // console.log('yuppp')
    this.setState({books: filteredBooks})
    console.log(filteredBooks)
  }

  reset(){
    this.setState({books: data})
  }

  render(){
    console.log(this.state.books)
    return (
    <div className="App">

      <Header/>
      <SearchBar filterBooks={this.filterBooks} reset={this.reset}/>     
      <BookList books={this.state.books} addToShelf={this.addToShelf}/>
      <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf}/> 
      
    </div>
   )
  }
}
  

export default App;
