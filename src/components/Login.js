import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


class Login extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={7}>Imagen</Col>
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

                                    <div style={{ textAlign: 'center', paddingTop: '40px' }}>
                                        <Button variant="secondary" type="submit" className="boton" >
                                            Iniciar
                                        </Button>
                                    </div>

                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}
export default Login;

