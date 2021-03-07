import React, {Component} from 'react'
import './App.css';
import BookList from './Components/BookList';
import Header from './Components/Header'
import Shelf from './Components/Shelf';
import {data} from './data'

class App extends Component {

  constructor(){
    super()

    this.state = {
      books : data,
      shelf : []
    }
     this.addToShelf = this.addToShelf.bind(this)
  }
  
  addToShelf( title){
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
  //  console.log(this.state.shelf)
  }

  clearShelf(){

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
