import React, { Component } from 'react';
import MenuSuperiorDeOpciones from './MenuSuperiorDeOpciones';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import axios from 'axios';

class Detalle extends Component{

    constructor() {
        super();
        this.state = ({
            db:[],     
            pais: [],            
        });
    }

    componentDidMount(){
        this._isMounted = true;
        this.getPlanetasServer();
      }
    
      componentWillUnmount(){
        this._isMounted = false;
      }
    
      getPlanetasServer(){
       //tomamos el numero de la url y los buscamos en el array de paises
        axios.get('https://restcountries.eu/rest/v2') 
        .then(result=>{
            this.setState({db: result.data})  
            this.setState({pais: this.state.db[this.props.match.params.id-1]})
            console.log('getplanetas')
            console.log({pais: this.state.db[this.props.match.params.id-1]})
        })       
        .catch(console.log);
   
    }

    render(){
                
        const paisEncontrado = this.state.pais;        
        if (Object.keys(paisEncontrado).length === 0) {
            return ("");
        }        
        
        
        return (
            <React.Fragment>
                <MenuSuperiorDeOpciones></MenuSuperiorDeOpciones>                         
                <Container>
                    <Row>
                        <Col>
                                                                               
                            <Row>
                            <h1>{paisEncontrado.name}</h1>
                            </Row>
                            <Row>
                            <img src={paisEncontrado.flag} alt="imagen" /> 
                            </Row>  
                        </Col>
                        <Col style={{ borderLeftStyle: 'solid', borderLeftWidth: '1px', borderLeftColor: 'lightgrey' }}>
                            <Col>
                            <Row >
                                <Col >Capital {paisEncontrado.capital}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Region: {paisEncontrado.region}</h6></Col>
                            </Row>
                            <Row>
                                <Col><h6>Poblacion: {paisEncontrado.population}</h6></Col>
                            </Row> 
                            <Row>
                                <Col><h6>Superficie: {paisEncontrado.area}</h6></Col>
                            </Row>
                            <Row>
                                <Col><h6>Fronteras: {paisEncontrado.borders}</h6></Col>
                            </Row>                                    
                            </Col>
                            
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Detalle;