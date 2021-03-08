import React, {Component} from 'react'

export default class SearchBar extends Component{
    constructor(props){
        super(props)

        this.state = {
            input: ''
        }
    }
    handleChange(val){
        this.setState({input : val})
        console.log(this.state.input)
    }

    handleClick = () => {
        this.props.filterBooks(this.state.input)
    }


    render(){
        return(
            <div className ='SearchBar'>
            <input className='input' placeholder='Enter Books' onChange={(event) => this.handleChange(event.target.value)}></input>
            <button onClick={this.handleClick}>Search</button>
            <button>Clear Search</button>
            </div>
        )
    }
}