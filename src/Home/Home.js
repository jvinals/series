import React from 'react';
import './Home.css';
import {API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE} from '../config';
//import {API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Serie from '../elements/Serie/Serie';

class Home extends React.Component {
    state ={
        series : [],
        resultSearch: [],
        inputText: '',
        madrid: 4,
        dallas: 6,
        stateA: "whatever"
    }

    componentDidMount(){
        //const endpoint = `${API_URL}search/tv?api_key=${API_KEY}&page=1&query=black`;
        //const endpoint = 'http://13.48.111.60:3001/testAPI';
        const endpoint = 'http://13.48.111.60:3001/testAPI';
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

    addSerie = (index) => {
        console.log('addSerie: '+index+' Title: '+this.state.resultSearch[index].original_name);
        this.setState({
            resultSearch:[],
            series: [ ...this.state.series, {
                'nombre': this.state.resultSearch[index].original_name,
                'idSerie': this.state.resultSearch[index].id,
                'backdrop': this.state.resultSearch[index].backdrop_path,
                'madrid':0,
                'dallas':0,
            }]
            // inputText:'',
        })
        const endpoint = 'http://13.48.111.60:3001/recordData?nombre='+this.state.resultSearch[index].original_name+'&id='+this.state.resultSearch[index].id+'&madrid=0&dallas=0&backdrop='+this.state.resultSearch[index].backdrop_path;
        fetch(endpoint);
    }

    deleteSerie = (index) => {
        console.log('deleteSerie: '+index+' Title: '+this.state.series[index].nombre);
        const endpoint = 'http://13.48.111.60:3001/deleteData?id='+this.state.series[index].idSerie;
        fetch(endpoint);
        const newSeries = this.state.series.splice(index,1);
        console.log('newSeries: '+ newSeries[0].nombre);
        this.setState({
            resultSearch:[],
            series: this.state.series
            // inputText:'',
        })
    }
    // (END) Functions for Search Box
  
    setSeriesViewVal = (newVal, butType, ciudad) => { 
        console.log('Detected 2 lift up: '+newVal);
        console.log('Detected 2 type: '+butType+' City: '+ciudad);
        console.log(this.state.series[newVal]);
        if (butType == '+') {
            if (ciudad == 'madrid') {
                this.state.series[newVal].madrid ++;
                const endpoint = 'http://13.48.111.60:3001/editData?id='+this.state.series[newVal].idSerie+'&valor='+this.state.series[newVal].madrid+'&ciudad=madrid';
                fetch(endpoint);  
            }else{
                this.state.series[newVal].dallas ++; 
                const endpoint = 'http://13.48.111.60:3001/editData?id='+this.state.series[newVal].idSerie+'&valor='+this.state.series[newVal].dallas+'&ciudad=dallas';
                fetch(endpoint);  
            }
        } else {
            if (ciudad == 'madrid') {
                this.state.series[newVal].madrid --;
                const endpoint = 'http://13.48.111.60:3001/editData?id='+this.state.series[newVal].idSerie+'&valor='+this.state.series[newVal].madrid+'&ciudad=madrid';
                fetch(endpoint);  
            }else{
                this.state.series[newVal].dallas --; 
                const endpoint = 'http://13.48.111.60:3001/editData?id='+this.state.series[newVal].idSerie+'&valor='+this.state.series[newVal].dallas+'&ciudad=dallas';
                fetch(endpoint);  
            }        }
        this.setState({stateA: newVal});
    }

    render (){
            const rowSeries = this.state.series.map((row, index) => {
                console.log('Row '+index+' '+row.nombre);
                    return (
                        <div className="rowContainer">   
                        <Serie 
                            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${row.backdrop}`}
                            titulo={row.nombre}
                            season='x'
                            madrid={row.madrid}
                            dallas={row.dallas}
                            setSeriesViewVal = {this.setSeriesViewVal}
                            serieIndex = {index}
                        />   
                                            
                        <div className = "colS4">
                            <Button variant="outline-danger" size="sm" onClick={() => this.deleteSerie(index)} style={{fontSize:'10px', margin:'0 auto'}}>Delete</Button>
                        </div>    
                        </div>
                    );
                //});
            });
            
            //console.log(rowSeries);
            const searchListContent = this.state.resultSearch.map((row, index) => {
                return(
                    <div>

                        <div className='RowResult' onClick={() => this.addSerie(index)}> 
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
                        <Button onClick={this.getSeries} variant="outline-primary" style={{marginLeft:'10px', float:'left'}}>Buscar</Button>
                        <Form.Control type="email" placeholder="Nombre de la serie" onChange={this.updateInput} style={{width:'200px', float:'left', marginLeft:'20px'}}/>
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