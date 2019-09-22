import React from 'react';
import './SearchList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../../config';

class SearchList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            heightBox: '50px',
            inputText:'',
            resultSearch:[],
        };
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())  
        .then(result => {     
                this.setState({
                    resultSearch:result.results,
                })
            })
    }

    getSeries = () => {
        const endpoint = `${API_URL}search/tv?api_key=${API_KEY}&page=1&query=${this.state.inputText}`;
        this.fetchItems(endpoint);    
        this.setState({
            //heightBox:'180px'
        }) 
    }

    updateInput = (evt) => {
        //console.log('Input Text: '+evt.target.value);
        this.setState({
            inputText: evt.target.value
        })  
    }
  
    addSerie = () => {
        console.log('addSerie');
        this.setState({
            resultSearch:[],
            // inputText:'',
        })
    }

    render(){
        console.log('this.state.rowSearch[0].name = '+this.state.rowSearch);
        const rowSearch = this.state.resultSearch.map((row, index) => {
            console.log('Row '+index+' '+row.name);
            return (
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

        return(
            <div className="ResultContainer">
                <div>{rowSearch}</div>
            </div>
        )
    
    
    }

        

}

export default SearchList;
