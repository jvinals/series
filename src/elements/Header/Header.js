import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
    render(){
        return(
            <div>
            <div className="series-header">
                <div className="series-header-content">
                    <img className="series-logo" src="./images/logo.png" alt="series-logo" />
                </div>
            </div>
            </div>
        )
    
    }
}

export default Header;


/*
            <div className="SearchArea" style={{height:this.state.heightBox}}>
                <Button onClick={this.getSeries} variant="outline-primary" style={{marginLeft:'0px', float:'left'}}>Buscar Serie
                </Button>
                <Form.Control type="email" placeholder="Nombre de la serie" onChange={this.updateInput} style={{width:'300px', float:'left', marginLeft:'20px'}}/>
                <div className="ResultContainer">
                    <div>{rowSearch}</div>
                </div>
            </div>
            


*/



/*
                <Button onClick={() => {
                    this.setState({
                        heightBox:'180px'
                    }) 
                    }} variant="outline-primary" style={{marginLeft:'0px', float:'left'}}>Buscar Serie
                </Button>
*/