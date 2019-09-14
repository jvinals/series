import React from 'react';
import './Home.css';
import Serie from '../elements/Serie/Serie';
import {API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../config';

class Home extends React.Component {
    state ={
        series :[],
        picSerie :[],
        madrid: 4,
        dallas: 6
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
                console.log ("DATA FETCHED:");
                console.log(resultJSON.results);
                console.log("Is it an Array?: "+Array.isArray(resultJSON.results));
                if (Array.isArray(resultJSON.results)) {console.log("Length: "+resultJSON.results.length)};
            })
    }
    

    render (){
            console.log("ESTADO:");
            console.log(this.state.picSerie.original_name);
            return (
                <div className="series-home">
                    <Serie 
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.picSerie.backdrop_path}`}
                        titulo={this.state.picSerie.original_name}
                        season='x'
                        madrid={this.state.madrid}
                        dallas={this.state.dallas}
                    />
                    {console.log(this.state.series[0])}
                    {this.state.series.map( (item,key) => {
                        console.log('A');
                        console.log("Is (now 'THIS') it an Array?: "+Array.isArray(this.state.series[0]));
                        console.log(this.state.series[0]);
                        item.map( (item,key) =>  console.log(key))
                    }
                        
                    )

                    }
                </div>
            )
    }
}

export default Home;






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