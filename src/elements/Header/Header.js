import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Header = () => {
    return(
        <div>
        <div className="series-header">
            <div className="series-header-content">
                <img className="series-logo" src="./images/logo.png" alt="series-logo" />
            </div>
        </div>
        <div className="SearchArea">
            <Form.Control type="email" placeholder="Nombre de la serie" style={{width:'300px', float:'left'}}/>
            <Button variant="outline-primary" style={{marginLeft:'100px', float:''}}>Buscar Serie</Button>
        </div>
        <div>
            <div className="loc1">Madrid</div><div className="loc2">Dallas</div>
        </div>
        </div>
    )
}

export default Header;
