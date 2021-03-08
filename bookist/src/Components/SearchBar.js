import React, {Component} from 'react'

export default class SearchBar extends Component{
    constructor(props){
        super(props)

        this.state = {
            input: ''
        }
        this.handleClear = this.handleClear.bind(this)
    }
    handleChange(val){
        this.setState({input : val})
        console.log(this.state.input)
    }

    handleClick = () => {
        this.props.filterBooks(this.state.input)
    }

    handleClear = () => {
        this.setState({input: ''})
        this.props.reset()

    }


    render(){
        return(
            <div className ='SearchBar'>
            <input value= {this.state.input} className='input' placeholder='Enter Books' onChange={(event) => this.handleChange(event.target.value)}></input>
            <button onClick={this.handleClick}>Search</button>
            <button onClick={this.handleClear}>Clear Search</button>
            </div>
        )
    }
}