import React, { Component } from 'react';

export default class GifSearch extends Component {

    state = {
        searchTerm: ""
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchGifs(this.state.searchTerm)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                onChange={this.handleChange}
                type="text"
                value={this.state.searchTerm}
                ></input>
                <input type="submit"></input>
            </form>
        )
    }
}