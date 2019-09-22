import React from 'react';
import './Home.css';
import {API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Serie from '../elements/Serie/Serie';
import SearchList from '../elements/SearchList/SearchList';

class Home extends React.Component {
    state ={
        series : [],
        resultSearch: [],
        inputText: '',
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
    // Functions for Search Box
    updateInput = (evt) => {
        console.log('Input Text: '+evt.target.value);
        this.setState({
            inputText: evt.target.value
        })  
    }
    getSeries = () => {
        const endpoint = `${API_URL}search/tv?api_key=${API_KEY}&page=1&query=${this.state.inputText}`;
        this.fetchSearchItems(endpoint);    
        /*
        this.setState({
            //heightBox:'180px'
        })
        */ 
    }

    fetchSearchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())  
        .then(result => {     
                this.setState({
                    resultSearch:result.results,
                })
            })
    }

    addSerie = () => {
        console.log('addSerie');
        this.setState({
            resultSearch:[],
            // inputText:'',
        })
    }
    
    renderSearchBox = () => {

    }
    // (END) Functions for Search Box
    
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
            const searchListContent = this.state.resultSearch.map((row, index) => {
                return(
                    <div>

                        <div className='RowResult' onClick={this.addSerie} > 
                        <div className="imgSerie"
                                style={{
                                    height:'150px',
                                    width:'300px',
                                    marginRight:'10px',
                                    marginTop:'5px',
                                    marginBottom:'5px',
                                    backgroundSize: '100% 100%',
                                    backgroundColor: 'rbga(100,100,100,.5)',
                                    backgroundImage:`url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${row.backdrop_path}')`,
                                }} 
                            ></div>  
                            <div className="Titulo">{row.name}</div>
                            <div className="Fecha">{row.first_air_date.substring(0,4)}</div>
                            <div className="Descripcion">{row.overview}</div>
                        </div>
   
                    </div>
                    );
            });

            console.log('search list content: '+searchListContent);

            return (
                <div>
                    <div className="SearchArea" style={{height:this.state.heightBox}}>
                        <Button onClick={this.getSeries} variant="outline-primary" style={{marginLeft:'0px', float:'left'}}>Buscar Serie
                        </Button>
                        <Form.Control type="email" placeholder="Nombre de la serie" onChange={this.updateInput} style={{width:'300px', float:'left', marginLeft:'20px'}}/>
                        <div className="ResultContainer">
                        <div>
                             {searchListContent}
                        </div>
                        </div>
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