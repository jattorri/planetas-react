import axios from 'axios';
import React, { Component } from 'react';
import MenuSuperiorDeOpciones from './MenuSuperiorDeOpciones';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Tabla from './Tabla';

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
        axios.get('https://restcountries.eu/rest/v2')
            .then(result => {
                this.setState({ db: result.data })
                console.log(result)  
            })
            .catch(console.log);
    }

    render(){
        const listaPaises = this.state.db
        console.log('lista paises')
        console.log(listaPaises)

            var nombreParam
            var  paises


            if (Object.entries(listaPaises).some(e => window.location.href.includes(e[1]))) { //Si hay un pais en string en la URL
                nombreParam = Object.entries(listaPaises).find(m => window.location.href.includes(m[1]))[0];
                console.log('nombreParam')
                console.log(nombreParam)
    
               paises = this.state.db.map((pais, i) => {   
                    
                    if (pais.nombre === nombreParam) {
                        console.log('entra al segundo if ')
                        return (
                            <Tabla
                            key={pais.name}
                            capital={pais.capital}
                            region={pais.region}
                            poblacion={pais.population}
                            bandera={pais.flag}
                           >
                            </Tabla>
                        )
                    }
                })
            }
            else {   //Si no hay pais en la URL
                paises = this.state.db.map((pais, i) => {
                    console.log('entra al eslse')
                    return (
                        <Tabla
                        key={pais.id}
                        codigo={pais.callingCodes}
                        nombre={pais.name}
                        region={pais.region}
                        capital={pais.capital}
                        poblacion={pais.population}
                        bandera={pais.flag}>
                        </Tabla>
                    )
                })
            }
    return(               
    <React.Fragment>
        <MenuSuperiorDeOpciones></MenuSuperiorDeOpciones>
        <h3>Home</h3>
        <Container className='pt-5'>
            <Row  xs={2} md={4} className='g-4'>
            <Col>
               {paises}
            </Col>
            </Row>
        </Container>
    </React.Fragment>
    );
    }
}
export default Home;