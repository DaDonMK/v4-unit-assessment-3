import React, {Component} from 'react'

export default class SearchBar extends Component{
    constructor(){
        super()

        this.state = {
            input: ''
        }
    }

    render(){
        return(
            <div className ='SearchBar'>
            <input className='input' placeholder='Enter Books'></input>
            <button>Search</button>
            <button>Clear Search</button>
            </div>
        )
    }
}