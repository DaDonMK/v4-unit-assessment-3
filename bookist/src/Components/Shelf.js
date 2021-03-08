import React, {Component} from 'react'


export default class Shelf extends Component{
    

    render(){
        console.log(this.props.shelf)
        let mappedTitles = this.props.shelf.map(function(element){
            return([
                <h2>{element}</h2>
            ])
             
        })
        return(
            <div className = 'Shelf'>
                <h1>shelf</h1>
                <button className = 'clear' onClick={this.props.clearShelf}>Clear Shelf</button>
                <span>{mappedTitles}</span>

            </div>
        )
    }

}