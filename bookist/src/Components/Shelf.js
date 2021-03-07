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
                <span>{mappedTitles}</span>
            </div>
        )
    }

}