import React from 'react'

import CardsHeader from './CardsHeader';

import img1 from '../assets/images/belga.jpg'
import Fondo from '../assets/images/d3.png'
import { Container, Row, Button } from 'react-bootstrap';


class CampañasDonacion extends React.Component {
    state = {
        cards: [
            { title: 'Reserva una cita1', texto: 'Hazlo en el hospital de tu preferencia', img: img1, estilo: 'puntodonacionlogo', buton: 'true',estilotarjeta:'cardtamaño' },
            { title: 'Reserva una cita1', texto: 'Hazlo en el hospital de tu preferencia', img: img1, estilo: 'puntodonacionlogo', buton: 'true',estilotarjeta:'cardtamaño' },
            { title: 'Reserva una cita1', texto: 'Hazlo en el hospital de tu preferencia', img: img1, estilo: 'puntodonacionlogo', buton: 'true',estilotarjeta:'cardtamaño' },
            { title: 'Reserva una cita1', texto: 'Hazlo en el hospital de tu preferencia', img: img1, estilo: 'puntodonacionlogo', buton: 'true',estilotarjeta:'cardtamaño' }
        ]
    };
    render() {
        return (
            <React.Fragment>
                <div>
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
                            <div className="">
                                <h1>Hopla</h1>

                                <Button variant="outline-light">Light</Button>
                            </div>

                        </div>

                    </section>

                    <section className="contenedor-tarjetas ">
                        <div className="seccion-inicio">
                            
                        <h4>Campañas de Donacion Activas</h4>
                        </div>
                        <Container>
                            <Row>
                                {
                                    this.state.cards.map((cards, i) => {
                                        return (
                                            <CardsHeader key={i} cards={cards} />
                                        )
                                    })

                                }

                            </Row>
                        </Container>
                    </section>
                </div>

            </React.Fragment>
        );
    }
}
export default CampañasDonacion;

