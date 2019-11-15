import React from 'react'
import Formulario from './Formulario';
import CardsHeader from './CardsHeader';

import img1 from '../assets/images/registrate a la pagina.png'
import img2 from '../assets/images/reserva una cita en un hospital cercano.png'
import img3 from '../assets/images/registrate a la pagina.png'
import img4 from '../assets/images/registrate a la pagina.png'

import { Container, Row } from 'react-bootstrap';
class Registrarse extends React.Component {
    state = {
        cards: [
            { title: 'Registrate', texto: 'Llena tu informacion en el formulario de registro', img: img1, estilo: 'tarjetas-img',estilotarjeta:'cardtamaño' },
            { title: 'Reserva una cita', texto: 'Hazlo en el hospital de tu preferencia', img: img2, estilo: 'tarjetas-img',estilotarjeta:'cardtamaño' },
            { title: 'Extraccion', texto: 'Una extraccion puede tomar entre 10 a 15 minutos', img: img3, estilo: 'tarjetas-img',estilotarjeta:'cardtamaño' },
            { title: 'Descanso', texto: 'No te olvides consumir un refrigerio', img: img4, estilo: 'tarjetas-img',estilotarjeta:'cardtamaño' }
        ]
    };
    render() {
        return (
            <React.Fragment>
                <div>
                    <section className="contenedor-tarjetas ">
                    <div className="seccion-inicio">
                    <h4>Conoce Proceso de Donacion de Sangre</h4>

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
                    <section className="seccion-inicio">
                        <h4>Formulario de Registro</h4>


                        <Formulario aux="true"/>
                    </section>
                </div>

            </React.Fragment>
        );
    }
}
export default Registrarse;

