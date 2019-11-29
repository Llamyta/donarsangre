import React from 'react'
import Card from './CardRND'
import Fondo from '../assets/images/d3.png'
import Imagen from '../assets/images/imagenseccionmotivos.png'


import { Image, Container, Row} from 'react-bootstrap'

class Inicio extends React.Component {
    state = {
        cards: [
            { title: 'Registrate', texto: 'Llena tu informacion en el formulario de registro', img: Imagen },
            { title: 'Registrate', texto: 'Llena tu informacion en el formulario de registro', img: Imagen },
            { title: 'Registrate', texto: 'Llena tu informacion en el formulario de registro', img: Imagen },
            { title: 'Registrate', texto: 'Llena tu informacion en el formulario de registro', img: Imagen }
        ]
    };
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
                            minHeight: '100vh'

                        }}>

                    </div>

                </section>

                <section className="seccion-inicio">
                    <div className="Espaciados">
                        <h3>¿Por qué Donar Sange?</h3>
                        <Container>
                            <Row>
                            {
                                    this.state.cards.map((cards, i) => {
                                        return (
                                            <Card key={i} cards={cards} />
                                        )
                                    })

                                }

                                
                            </Row>
                        </Container>
                        
                        </div>
                </section>

            </React.Fragment>
                );
            }
        }
        export default Inicio;
        
