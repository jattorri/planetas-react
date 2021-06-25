import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { Button } from 'react-bootstrap';


class Tabla extends Component {



    render() {

        //Logica
        

        //HTML
        return (
            <React.Fragment>
                <Table >
                    <Col >
                        <Row sm='2' >
                            <Card.Link href={`detalle/${this.props.codigo}`}>
                              
                            </Card.Link>
                        </Row>
                        <Row >
                            <Card.Body>
                                <Card.Title > Nombre pais:  {this.props.nombre}</Card.Title>
                                <Card.Text>
                                    <p>Capital: {this.props.capital}</p>
                                    <p>Region: {this.props.region}</p> 
                                    <p> Poblacion: {this.props.poblacion}</p>
                                    <p>CallingCode: {this.props.codigo}</p>
                                    <Button href={`detalle/${this.props.codigo}`} variant="outline-primary" style={{margin:'1rem'}}>VER DETALLE</Button>
                                </Card.Text>
                            </Card.Body>
                        </Row>
                    </Col>
                </Table>
            </React.Fragment >

        );

    }
}

export default Tabla;