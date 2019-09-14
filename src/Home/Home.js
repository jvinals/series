import React from 'react';
import './Home.css';
import Serie from '../elements/Serie/Serie';
import {API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../config';

class Home extends React.Component {
    state ={
        series :[]
    }
    
    componentDidMount(){
        const endpoint = `${API_URL}search/tv?api_key=${API_KEY}&page=1&query=Blacklist`;
        this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
            .then(result => result.json())  
            .then(resultJSON => {
                this.setState({
                    series:[resultJSON.results],
                    picSerie: resultJSON.results[0]
                })
                console.log(resultJSON);
            })
    }

/*
    fetchItems = (endpoint) => {
        fetch(endpoint)
            .then(function(result){
                return result.json();
            })
            .then(function(resultJSON){
                console.log(resultJSON);
                this.setState({
                    series:[resultJSON.results]
                })
            })
    }
*/
    render (){
            return (
                <div className="series-home">
                    <Serie 
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${"/fHwiAqIKragaCbNJo9Qs4lrccIN.jpg"}`}
                    />
                </div>
            )
    }
}

export default Home;