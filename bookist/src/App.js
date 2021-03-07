import React, {Component} from 'react'
import './App.css';
import BookList from './Components/BookList';
import Header from './Components/Header'
import Shelf from './Components/Shelf';
import {data} from './data'

class App extends Component {

  constructor(){
    super()

    this.state ={
      books : data,
      shelf : []
    }
     this.addToShelf = this.addToShelf.bind(this)
  }
  
  addToShelf(title){
    this.state.shelf.push(title)
  }
  
  render(){
    console.log(this.state.books)
    return (
    <div className="App">
      <Header/>
      <BookList books={this.state.books} addToShelf={this.addToShelf}/>
      <Shelf shelf={this.state.shelf}/>      
      
    </div>
  )
  }
}
  

export default App;
