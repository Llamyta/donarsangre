import React from 'react'
import Fondo from '../assets/images/d5.png'
import Logo2 from '../assets/images/com1img1.png'
import Logo3 from '../assets/images/com1img2.png'
import Logo4 from '../assets/images/com1img3.png'


import { Container, Row, Col, Figure, Carousel } from 'react-bootstrap';

class Inicio extends React.Component {
    render() {
        return (
            <React.Fragment>
                 <section className="fondo">
                        <div className='Component-Bg'
                            style={{
                                backgroundImage: 'url(' + Fondo + ')',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                                backgroundRepeat: 'no-repeat',
                                width: 'auto',
                                height: '600px',

                            }}>

                        </div>

                    </section>

                <section className="seccion-inicio">
                    <div className="Espaciados">
                        <h3>Beneficios de Donar Sangre</h3>
                    </div>
                    <div >


                        <Container>
                            <Row>
                                <Col sm>
                                    <Figure >

                                        <div className="inicio-logo">
                                            <Figure.Image
                                                alt=""
                                                src={Logo2}
                                            />
                                        </div>
                                        <br />
                                        <Figure.Caption>
                                            <p>Equilibra los niveles de Hierro en la sangre.</p>
                                        </Figure.Caption>
                                    </Figure>

                                </Col>
                                <Col sm>
                                    <Figure >

                                        <div className="inicio-logo">
                                            <Figure.Image
                                                alt=""
                                                src={Logo2}
                                            />
                                        </div>
                                        <br />
                                        <Figure.Caption>
                                            <p>Equilibra los niveles de Hierro en la sangre.</p>
                                        </Figure.Caption>
                                    </Figure>

                                </Col>
                                <Col sm>
                                    <Figure>
                                        <div className="inicio-logo">
                                            <Figure.Image
                                                alt=""
                                                src={Logo3}
                                            />
                                        </div>
                                        <br />
                                        <Figure.Caption>
                                            <p>Mejora el flujo sanguineo.</p>
                                        </Figure.Caption>
                                    </Figure>

                                </Col>
                                <Col sm>
                                    <Figure>
                                        <div className="inicio-logo">
                                            <Figure.Image
                                                alt=""
                                                src={Logo4}
                                            />
                                        </div>
                                        <br />
                                        <Figure.Caption>
                                            <p>Puedes salvar hasta 3 vidas.</p>
                                        </Figure.Caption>
                                    </Figure>

                                </Col>
                               
                            </Row>
                        </Container>
                    </div>
                </section>
                <section>
                    <div>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="holder.js/800x400?text=First slide&bg=373940"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="holder.js/800x400?text=Second slide&bg=282c34"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="holder.js/800x400?text=Third slide&bg=20232a"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </section>

            </React.Fragment>
        );
    }
}
export default Inicio;

