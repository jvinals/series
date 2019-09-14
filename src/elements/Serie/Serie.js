import React from 'react';
import './Serie.css';

const Serie = (props) => {
    return(
        <div className="series-tabla-container"> 
            <div className="series-tabla">
                <div className="rowSerie"
                    style={{
                        height:'200px',
                        width:'400px',
                        backgroundSize: '100% 100%',
                        backgroundColor: 'rbga(100,100,100,.5)',
                        backgroundImage:`url('${props.image}')`,
                    }} 
                >
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