import React, {Component} from 'react'

class BookList extends Component{

    render(){
        let mappedbooks = this.props.books.map((element) => {
           return ([
           <img src = {element.img} alt= 'Books' onClick={() => this.props.addToShelf(element.title)}></img>,
           <h2>{element.title} by {element.author}</h2>
           ])
        });
    
        return(
            <div className = 'BookList'>
                <h1>list</h1>
                <span>{mappedbooks}</span>
            </div>
        )   
    }
}
export default BookList