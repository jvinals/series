import React from 'react';
import './Home.css';
import Serie from '../elements/Serie/Serie';
import {API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../config';

class Home extends React.Component {
    state ={
        series :[],
        madrid: 4,
        dallas: 6
    }

    componentDidMount(){
        //const endpoint = `${API_URL}search/tv?api_key=${API_KEY}&page=1&query=black`;
        const endpoint = `${API_URL}search/tv?api_key=${API_KEY}&page=1&query=black`;
        this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
            .then(result => result.json())  
            .then(resultJSON => {
                console.log(resultJSON.results);
                this.setState({
                    series:[resultJSON.results],
                })
            })
    }

    render (){
            var rowSeries;
            this.state.series.map((row, index) => {
                rowSeries = row.map((row2, index) => {
                    return (
                        <div>   
                        <Serie 
                            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${row2.backdrop_path}`}
                            titulo={row2.original_name}
                            season='x'
                            madrid={this.state.madrid}
                            dallas={this.state.dallas}
                        />                            
                        </div>
                    );
                });
            });
            
            return (
                <div className="series-home">
                    {rowSeries}
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


/*
                console.log ("DATA FETCHED:");
                console.log(resultJSON.results);
                console.log("Is it an Array?: "+Array.isArray(resultJSON.results));
                if (Array.isArray(resultJSON.results)) {console.log("Length: "+resultJSON.results.length)};
*/