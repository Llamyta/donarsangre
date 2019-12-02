import React from 'react'

import { Form, Col, Button, Modal, Container, Row } from 'react-bootstrap';
class Formulario extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    render() {
        return (
            <React.Fragment>
                <div className="App-Formulario">
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="CI">
                                <Form.Label>Carnet de Identidad</Form.Label>
                                <Form.Control placeholder="Numero de Carnet" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="nombre">
                                <Form.Label>Nombre(s)</Form.Label>
                                <Form.Control placeholder="Nombre" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="ap">
                                <Form.Label>Apellido Paterno</Form.Label>
                                <Form.Control placeholder="Apellido" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="am">
                                <Form.Label>Apellido Materno</Form.Label>
                                <Form.Control placeholder="Apellido" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <p>Fecha de Nacimiento</p>
                        </Form.Row>
                        <Form.Row>


                            <Form.Group as={Col} controlId="añonac">
                                <Form.Control as="select">
                                    <option>Año</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="mesnac">
                                <Form.Control as="select">
                                    <option>Mes</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="dianac">
                                <Form.Control as="select">
                                    <option>Dia</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                        </Form.Row>
                        {this.props.aux2 &&
                            <Form.Row>
                                <Form.Group as={Col} id="dsangre">
                                    <Form.Check type="checkbox" label="Sangre" />
                                </Form.Group>
                                <Form.Group as={Col} id="Dplaquetas">
                                    <Form.Check type="checkbox" label="Plaquetas" />
                                </Form.Group>
                            </Form.Row>
                            
                        }
                        
                        <Form.Row>
                            <Form.Group as={Col} controlId="genero">
                                <Form.Label>Género</Form.Label>
                                <Form.Control as="select">
                                    <option>Selecciona</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="tiposangre">
                                <Form.Label>Tipo de Sangre</Form.Label>
                                <Form.Control as="select">
                                    <option>Selecciona</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        {this.props.aux2 &&
                            <Form.Row>
                                <Form.Group as={Col} controlId="cantdonadores">
                                    <Form.Label>Cantidad Donadores</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                                <Form.Group as={Col} controlId="puntodonacion">
                                    <Form.Label>Punto de Donacion</Form.Label>
                                    <Form.Control as="select">
                                        <option>Selecciona</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                            </Form.Row>

                        }


                        {this.props.aux &&

                            <Form.Row>
                                <Form.Group as={Col} controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="pwd">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Form.Row>
                        
                        }
                        <Form.Row>
                            <p>Insertar imagen</p>
                        </Form.Row>
                        
                        <Form.Row>
                            <Button variant="outline-secondary"><i className="fas fa-image"style={{ fontSize: '5em', color:'black' }}></i></Button>
                        </Form.Row>
                        {this.props.aux &&
                            <Form.Row>
                            <p>Ya estas registrado?<Button onClick={this.handleShow} variant="link">Iniciar Sesion...</Button></p>
                            </Form.Row>
                            
                           
                        }


                        <div style={{ textAlign: 'center', paddingTop: '40px' }}>
                            <Button variant="secondary" type="submit" className="boton" >
                                Registrar
                            </Button>
                        </div>
                        <Modal show={this.state.show} onHide={this.handleClose}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <Container>
                                        <Row>
                                            <Col sm={7} className="ocultar">Imagen</Col>
                                            <Col sm={5}>

                                                <div className="App-Formulario">
                                                    <Form>
                                                        <Form.Group controlId="formBasicEmail">
                                                            <Form.Label>Email address</Form.Label>
                                                            <Form.Control type="email" placeholder="Enter email" />
                                                        </Form.Group>

                                                        <Form.Group controlId="formBasicPassword">
                                                            <Form.Label>Password</Form.Label>
                                                            <Form.Control type="password" placeholder="Password" />
                                                        </Form.Group>

                                                        <div style={{ textAlign: 'center', paddingTop: '40px'}}>
                                                            <Button variant="secondary" type="submit" className="boton">
                                                                Iniciar
                                        </Button>
                                                        </div>

                                                    </Form>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Modal.Body>
                            </Modal>

                    </Form>
                </div>
            </React.Fragment>
        );
    }
}
export default Formulario;

