import React, {Component} from 'react'

class BookList extends Component{
    constructor(){
        super()
    }

    render(){
        console.log(this.props.books)
        let mappedbooks = this.props.books.map((element) => {
           return ([
           <img src = {element.img} alt= 'Books'></img>,
           <h2>{element.title} by {element.author}</h2>
           ])
        });
    
        return(
            <div className = 'BookList'>
                <h1>list</h1>
                <h2>{mappedbooks}</h2>
            </div>
        )
        
    }

}
export default BookList