import React from 'react';
import './Home.css';
import Tabla from '../elements/Tabla/Tabla';

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