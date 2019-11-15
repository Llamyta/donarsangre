import React from 'react'

import CardsHeader from './CardsHeader';

import img1 from '../assets/images/belga.jpg'
import img from '../assets/images/agendarcita.png'
import img2 from '../assets/images/acude al centro de salud.png'
import img3 from '../assets/images/donasangre salva vidas.png'
import { Container, Row } from 'react-bootstrap';


class PuntosDonacion extends React.Component {
    state = {
        cards: [
            { texto: 'Agenda una cita cuando mas te convenga', img: img, estilo: 'tarjetas-img',estilotarjeta:'cardtamaño2' },
            { texto: 'Acude a donar al centro de salud de tu eleccion', img: img2, estilo: 'tarjetas-img',estilotarjeta:'cardtamaño2' },
            { texto: 'Salva vidas. Recuerda que podrías salvar hasta 3 vidas', img: img3, estilo: 'tarjetas-img',estilotarjeta:'cardtamaño2' }
        ],
        cards1: [
            { title: 'Reserva una cita', texto: 'Hazlo en el hospital de tu preferencia', img: img1, estilo: 'puntodonacionlogo', buton: 'true',estilotarjeta:'cardtamaño' },
            { title: 'Reserva una cita2', texto: 'Hazlo en el hospital de tu preferencia', img: img1, estilo: 'puntodonacionlogo', buton: 'true',estilotarjeta:'cardtamaño' },
            { title: 'Reserva una cita3', texto: 'Hazlo en el hospital de tu preferencia', img: img1, estilo: 'puntodonacionlogo', buton: 'true',estilotarjeta:'cardtamaño' },
            { title: 'Reserva una cita4', texto: 'Hazlo en el hospital de tu preferencia', img: img1, estilo: 'puntodonacionlogo', buton: 'true',estilotarjeta:'cardtamaño' }
        ]
        
    };
    render() {
        return (
            <React.Fragment>
                <div  style={{ textAlign:'center'}} >
                    {/**corregir padding */}
                <section className="contenedor-tarjetas " style={{paddingLeft:'4%'}}>
                    <div className="seccion-inicio" >
                    <h4>Conoce Proceso de Donacion</h4>

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

                    <section className="contenedor-tarjetas ">
                        <div className="seccion-inicio">
                            
                        <h4>Puntos de Donacion Activos</h4>
                        </div>
                        <Container>
                            <Row>
                                {
                                    this.state.cards1.map((cards, i) => {
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
export default PuntosDonacion;

