import React, { Component } from 'react';
import MenuSuperiorDeOpciones from './MenuSuperiorDeOpciones';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Tarjeta from './Tarjeta';

class AgrupadosPorElemento extends Component {

    constructor() {
        super();
        this.state = ({
            db: [],
            ordenados: []
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
                console.log(result.data.sort((a,b) => parseFloat(b.diametro) - parseFloat(a.diametro)));
                this.setState({ db: result.data })
               
            })
            .catch(console.log);
    }

    render() {

        const planetas = this.state.db.map((planetai, i) => {
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
        });
        return (
            <React.Fragment>
                <MenuSuperiorDeOpciones></MenuSuperiorDeOpciones>
                Agrupados por Diametro
                <Container>
                    <Row><br></br></Row>
                    <Row>
                        <Col>
                            {planetas.diametro}
                        </Col>
                        <Col>
                            {planetas}
                        </Col>
                    </Row><br></br>
                </Container>
            </React.Fragment>
        )

    }
}

export default AgrupadosPorElemento;