import axios from 'axios';
import React, { Component } from 'react';
import MenuSuperiorDeOpciones from './MenuSuperiorDeOpciones';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Tarjeta from './Tarjeta';





class Home extends Component {

    constructor() {
        super();
        this.state = ({
            db: [],
        });
    }
    componentDidMount() {
        this._isMounted = true;
        this.getPlanetasServer();
    }

    //Este método es llamado cuando un componente se elimina del DOM
    componentWillUnmount() {
        this._isMounted = false;
    }

    getPlanetasServer() {
        //axios.get('http://localhost:8080/instrumento');
        axios.get('/test/ta/sistema_solar.json')
            .then(result => {
                this.setState({ db: result.data })
                console.log(result)  
            })
            .catch(console.log);
    }

    render(){
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
            var planetas
            var nombreParam
            if (Object.entries(listaPlanetas).some(e => window.location.href.includes(e[1]))) { //Si hay un mes en string en la URL

                nombreParam = Object.entries(listaPlanetas).find(m => window.location.href.includes(m[1]))[0];    //Guardo su numero correspondiente 
                planetas = this.state.db.map((planetai, i) => {    
                    if (planetai.codigo === (parseInt(nombreParam))) {
                        console.log('entra al segundo if ')
                        return (
                            <Tarjeta
                            key={planetai.id}
                            codigo={planetai.codigo}
                            nombre={planetai.nombre}
                            diametro={planetai.diametro}
                            rotacionDias={planetai.rotacionDias}
                            imagen={planetai.urlImg}>
                            </Tarjeta>
                        )
                    }
                })
            }
            else {   //Si no hay mes en la URL
                planetas = this.state.db.map((planetai, i) => {
                    console.log('entra al eslse')
                    return (
    
                        <Tarjeta
                        key={planetai.id}
                        codigo={planetai.codigo}
                        nombre={planetai.nombre}
                        diametro={planetai.diametro}
                        srotacionDiaso={planetai.rotacionDias}
                        imagen={planetai.urlImg}>
                        </Tarjeta>
    
                    )
                })
            }
    return(               
    <React.Fragment>
        <MenuSuperiorDeOpciones></MenuSuperiorDeOpciones>
        <h3>Home</h3>
        <Container className='pt-5'>
            <Row xs={1} md={4} className='g-4'>
                {planetas}
            </Row>
        </Container>
    </React.Fragment>
    );
    }
}
export default Home;