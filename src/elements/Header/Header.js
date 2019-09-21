import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../../config';

//const Header = () => {
class Header extends React.Component {
    /*
    state = {
        heightBox: 50
    }
    */
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
        console.log('this.state.heightBox = '+this.state.heightBox);
        return(
            <div>
            <div className="series-header">
                <div className="series-header-content">
                    <img className="series-logo" src="./images/logo.png" alt="series-logo" />
                </div>
            </div>
            <div className="SearchArea" style={{height:this.state.heightBox}}>
                <Button onClick={this.getSeries} variant="outline-primary" style={{marginLeft:'0px', float:'left'}}>Buscar Serie
                </Button>
                <Form.Control type="email" placeholder="Nombre de la serie" onChange={this.updateInput} style={{width:'300px', float:'left', marginLeft:'20px'}}/>
                <div className="ResultContainer">
                    <div>{rowSearch}</div>
                </div>
            </div>
            <div>
                <div className="loc1">Madrid</div><div className="loc2">Dallas</div>
            </div>
            </div>
        )
    
    }
}

export default Header;



/*
                <Button onClick={() => {
                    this.setState({
                        heightBox:'180px'
                    }) 
                    }} variant="outline-primary" style={{marginLeft:'0px', float:'left'}}>Buscar Serie
                </Button>
*/