import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

class MenuSuperiorDeOpciones extends React.Component {

    constructor(props){
        super(props);
        this.state={
            nombre:''
        }
    }
    changeHandler = (e) =>{
        this.setState({nombre: e.target.value})
        console.log('change handler')
        
    } 
    render() {
        var nombre
        return (
            <React.Fragment>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/home">Planetas</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>                       
                    </Nav>
                    <Form inline>
                    <FormControl type="text" id="nombre"placeholder="Search" className="mr-sm-2" value={nombre} onChange={this.changeHandler}/>
                    <Button href={`/?${this.state.nombre.toLowerCase()}`} variant="outline-success">Search</Button>
                    </Form>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default MenuSuperiorDeOpciones;