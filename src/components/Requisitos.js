import React from 'react'

import CardsHeader from './CardsHeader';

import Logo1 from '../assets/images/2.png'
import Logo2 from '../assets/images/3.png'
import Logo3 from '../assets/images/4.png'
import Logo4 from '../assets/images/5.png'
import Logo5 from '../assets/images/6.png'
import Logo6 from '../assets/images/7.png'
import Logo7 from '../assets/images/8.png'
import Logo8 from '../assets/images/9.png'
import Logo9 from '../assets/images/10.png'
import Logo10 from '../assets/images/15.png'
import Logo11 from '../assets/images/16.png'
import Logo12 from '../assets/images/13.png'
import Fondo from '../assets/images/fondoseccionrequisitos.png'
import { Container, Row } from 'react-bootstrap';
class Requisitos extends React.Component {
    state = {
        cards: [
            { texto: 'No presentar síntomas de Resfriado', img: Logo1, estilo: 'requisitos-logo', estilotarjeta: 'cardtamaño' },
            { texto: 'Ser mayor de edad y no tener más de 65', img: Logo2, estilo: 'requisitos-logo', estilotarjeta: 'cardtamaño' },
            { texto: 'Presentar tu Cedula de Identidad Vigente', img: Logo3, estilo: 'requisitos-logo', estilotarjeta: 'cardtamaño' },
            { texto: 'No presentar síntomas de Resfriado', img: Logo4, estilo: 'requisitos-logo', estilotarjeta: 'cardtamaño' },
            { texto: 'No haber pasado más de 4 horas sin comer', img: Logo5, estilo: 'requisitos-logo', estilotarjeta: 'cardtamaño' },
            { texto: 'No haber consumido analgésicos', img: Logo6, estilo: 'requisitos-logo', estilotarjeta: 'cardtamaño' },
            { texto: 'No haberse hecho tatuajes o perforaciones recientemente', img: Logo7, estilo: 'requisitos-logo', estilotarjeta: 'cardtamaño' },
            { texto: 'No haber consumido alcohol en las últimas 48 horas', img: Logo8, estilo: 'requisitos-logo', estilotarjeta: 'cardtamaño' },
            { texto: 'Pueden donar quienes padecieron Hepatitis A antes de los 10 años de edad', img: Logo9, estilo: 'requisitos-logo', estilotarjeta: 'cardtamaño' },
            { texto: 'Cirugía menor y / o extracción dental no complicada, esperar 7 días', img: Logo10, estilo: 'requisitos-logo', estilotarjeta: 'cardtamaño' },
            { texto: 'Cirugía mayor esperar 6 meses; si hubo transfusión de sangre esperar un año', img: Logo11, estilo: 'requisitos-logo', estilotarjeta: 'cardtamaño' },
            { texto: 'No haber sido detectado con VIH, Chagas o Hepatitis tipo B o C', img: Logo12, estilo: 'requisitos-logo', estilotarjeta: 'cardtamaño' }
        ]
    };
    render() {
        return (
            <React.Fragment>
                <div >
                    <div className="Espaciados" style={{ textAlign: 'center' }}>
                        <div className="Espaciados">
                            <h1 style={{fontFamily: "learning curve"}}>Requisitos para ser Donador</h1>
                        </div>
                        <Container className='Component-Bg imagenfondo'>
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

                    </div>
                </div>
                <div className="fondo">
                    <div className='Component-Bg'
                        style={{
                            backgroundImage: 'url(' + Fondo + ')',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            height: '400px'

                        }}>

                    </div>

                </div>

            </React.Fragment>
        );
    }
}
export default Requisitos;

