import React from 'react';
import './Serie.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Serie = (props) => {
    return(
        <div className="series-tabla-container"> 
            <div className="series-tabla">
                <div className="imgSerie"
                    style={{
                        height:'150px',
                        width:'300px',
                        backgroundSize: '100% 100%',
                        backgroundColor: 'rbga(100,100,100,.5)',
                        backgroundImage:`url('${props.image}')`,
                    }} 
                ></div>    
                <div className = "colS1">
                    <div className="seriesNombre">{props.titulo}</div>
                    <div className="seriesSeason">Season {props.season}</div>
                </div>
                <div className = "colS2">
                    <div className="episodio">{props.madrid}</div>
                    <div className="colInterna">
                        <div className="botonEpisodio">+</div>
                        <div className="botonEpisodio">-</div>
                    </div>
                </div>
                <div className = "colS3">
                    <div className="episodio" style={{color:'#00CC5E'}}>{props.dallas}</div>
                    <div className="colInterna">
                        <div className="botonEpisodio">+</div>
                        <div className="botonEpisodio">-</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Serie;

/*
background: 
`linear-gradient(to bottom , rgba(0,0,0,0)
39%,rgba(0,0,0,0)
41%,rgba(0,0,0,0.65)
100%),
url('${props.image}'), #1c1c1c`  

*/

/*
                        background: 
                            `linear-gradient(to bottom , rgba(0,0,0,0)
                            39%,rgba(0,0,0,0)
                            41%,rgba(0,0,0,0.65)
                            100%)`
*/