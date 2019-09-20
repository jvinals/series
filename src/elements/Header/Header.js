import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
        };
      }

    render(){
        console.log('this.state.heightBox = '+this.state.heightBox);
        const boxH = '990';//this.state.heightBox;
        return(
            <div>
            <div className="series-header">
                <div className="series-header-content">
                    <img className="series-logo" src="./images/logo.png" alt="series-logo" />
                </div>
            </div>
            <div className="SearchArea" style={{height:this.state.heightBox}}>
                <Button onClick={() => {
                    this.setState({
                        heightBox:'180px'
                    }) 
                    }} variant="outline-primary" style={{marginLeft:'0px', float:'left'}}>Buscar Serie
                </Button>
                <Form.Control type="email" placeholder="Nombre de la serie" style={{width:'300px', float:'left', marginLeft:'20px'}}/>
                
            </div>
            <div>
                <div className="loc1">Madrid</div><div className="loc2">Dallas</div>
            </div>
            </div>
        )
    
    }
}

export default Header;
