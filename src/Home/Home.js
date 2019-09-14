import React from 'react';
import './Home.css';
import Tabla from '../elements/Tabla/Tabla';
import {API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../config';

class Home extends React.Component {
    state ={

    }
    
    render (){
            return (
                <div className="series-home">
                    <Tabla />
                </div>
            )
    }
}

export default Home;