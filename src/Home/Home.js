import React from 'react';
import './Home.css';
import {API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';
import Serie from '../elements/Serie/Serie';
import SearchList from '../elements/SearchList/SearchList';

class Home extends React.Component {
    state ={
        series :[],
        madrid: 4,
        dallas: 6
    }

    componentDidMount(){
        //const endpoint = `${API_URL}search/tv?api_key=${API_KEY}&page=1&query=black`;
        //const endpoint = 'http://13.48.111.60:3001/testAPI';
        const endpoint = 'http://localhost:3001/testAPI';
        this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())  
        .then(result => {
            
                this.setState({
                    series:result,
                })
            })
    }

    render (){
            const rowSeries = this.state.series.map((row, index) => {
                console.log('Row '+index+' '+row.nombre);
                    return (
                        <div>   
                        <Serie 
                            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${row.backdrop_path}`}
                            titulo={row.nombre}
                            season='x'
                            madrid={row.madrid}
                            dallas={row.dallas}
                        />                        
                        </div>
                    );
                //});
            });
            
            console.log(rowSeries);
            return (
                <div>
                    <div>
                        <SearchList/>
                    </div>
                    <div className="loc1">Madrid</div><div className="loc2">Dallas</div>
                    <div className="series-home">
                        {rowSeries}
                    </div>
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