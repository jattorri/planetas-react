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
            planeta: []            
        });
    }

    componentDidMount(){
        this._isMounted = true;
        this.getPlanetasServer();
      }
    
      //Este método es llamado cuando un componente se elimina del DOM
      componentWillUnmount(){
        this._isMounted = false;
      }
    
      getPlanetasServer(){
        //axios.get('http://localhost:8080/instrumento');
        axios.get('/test/ta/sistema_solar.json') 
        .then(result=>{
            //console.log(result.data);
            this.setState({db: result.data})  
            this.setState({planeta: this.state.db[this.props.match.params.id-1]})
            console.log('getplanetas')
            console.log({planeta: this.state.db[this.props.match.params.id-1]})
        })       
        .catch(console.log);
        //console.log(this.state.db);
    
    }

    render(){
                
        const planetaEncontrado = this.state.planeta;        
        const listaPlanetas = { 
            1: 'sol', 
            2: 'mercurio', 
            3: 'venus', 
            4: 'tierra', 
            5: 'marte', 
            6: 'jupiter', 
            7: 'saturno', 
            8: 'urano', 
            9: 'neptuno', };                      
        
        if (Object.keys(planetaEncontrado).length === 0) {
            return ("");
        }        
        
        
        return (
            <React.Fragment>
                <MenuSuperiorDeOpciones></MenuSuperiorDeOpciones>
                Detalle {this.props.match.params.id}                              
                <Container>
                <Row><br></br></Row>
                    <Row>
                        <Col>
                            <img src={planetaEncontrado.urlImg} alt="imagen" style={{marginLeft:'3rem'}}/>                                                        
                            <Row>
                            {planetaEncontrado.nombre}
                            </Row>
                        </Col>
                        <Col style={{ borderLeftStyle: 'solid', borderLeftWidth: '1px', borderLeftColor: 'lightgrey' }}>
                            <Col>
                            <Row >
                                <Col style={{color:'grey'}}>Codigo{planetaEncontrado.codigo}</Col>
                            </Row>
                            <Row >
                                <Col><h2>Diametro: {planetaEncontrado.diametro}</h2></Col>
                            </Row>
                            
                            
                            <Row>
                                <Col><h6>Rotacion Dias: {planetaEncontrado.rotacionDias}</h6></Col>
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