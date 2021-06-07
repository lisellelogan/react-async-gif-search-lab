//It will also render a <GifSearch /> component that renders the form. <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.

import React, { Component } from 'react';
import GifList from '../components//GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {

    state = {
        gifs: []
    }

    componentDidMount(){
        this.fetchGifs()
    }

    fetchGifs = (search="dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(data => {
            const urls = data.data.map(gif => gif.images.original.url)
        
            this.setState({gifs: [...urls]})
        })
    }

    render(){
        return(
            <div>
              <GifList gifs={this.state.gifs}/> 
              <GifSearch fetchGifs={this.fetchGifs}/>
            </div>
        )
    }
}