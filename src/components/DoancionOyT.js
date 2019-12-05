import React from 'react'
import Formulario from './Formulario';
import CardsHeader from './CardsHeader';

import { Container, Row, Col  } from 'react-bootstrap';

import Fondo from '../assets/images/fondoseccionorganos2.jpg'
import img from '../assets/images/Requisitosdonarorganos.png'
import img2 from '../assets/images/Requisitosdonarorganos2.png'
import img3 from '../assets/images/Requisitosdonarorganos3.png'
import img4 from '../assets/images/Requisitosdonarorganos4.png'



class DoancionOyT extends React.Component {
    state = {
        cards: [
            { texto: 'Ser mayor de veintiún (21) años.', img: img, estilo: 'tarjetas-img',estilotarjeta:'cardtamaño' },
            { texto: 'Estar con pleno uso de sus facultades mentales.', img: img2, estilo: 'tarjetas-img',estilotarjeta:'cardtamaño' },
            { texto: 'Estar físicamente apto para la donación.', img: img3, estilo: 'tarjetas-img',estilotarjeta:'cardtamaño' },
            { texto: 'Estar informado debidamente de los riesgos.', img: img4, estilo: 'tarjetas-img',estilotarjeta:'cardtamaño' },
        ],
        cards1: [
            { texto: 'Agenda una cita cuando mas te convenga', img: img2, estilo: 'tarjetas-img',estilotarjeta:'cardtamaño2' },
            { texto: 'Acude a donar al centro de salud de tu eleccion', img: img2, estilo: 'tarjetas-img',estilotarjeta:'cardtamaño2' },
          ]
    };
    render() {
        return (
            <React.Fragment>
                <div className="fondo">
                    <div className='Component-Bg'
                        style={{
                            backgroundImage: 'url(' + Fondo + ')',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            height: '600px'

                        }}>

                    </div>

                </div>
                <div className="seccion-inicio">
                    <div className="Espaciados">
                        <h3>Requisitos para donar Organos</h3>
                        <Container style={{ marginBottom: '8%' }}>
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
                <div style={{ backgroundColor: 'white' }}>
                    <div >
                        <div className="fondo">
                            <div className='Component-Bg'
                                style={{
                                    backgroundImage: 'url(' + Fondo + ')',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                    height: '800px'


                                }}>


                            </div>

                        </div>

                    </div>
                </div>








                 <div >
                    <section className="contenedor-tarjetas ">
                        <div className="seccion-inicio">
                            <h4>¿Cuales son los requisitos para poder Donar Organos?</h4>

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
                            <h4>¿Qué organos puedes Donar?</h4>

                        </div>
                        <Container>
                            {/**esta clase para poder centrar los cards */}
                        <div className="offset-2 col-10">
                            <Row>
                                {
                                    this.state.cards1.map((cards, i) => {
                                        return (
                                            <CardsHeader key={i} cards={cards} />
                                        )
                                    })

                                }


                            </Row>
                        </div>
                        </Container>
                    </section>
                    <section className="contenedor-tarjetas ">
                        <div className="seccion-inicio">
                            <h4>¿Qué organos puedes Donar?</h4>

                        </div>
                        <Container>
                            {/**esta clase para poder centrar los cards */}
                        <div className="offset-2 col-10">
                            <Row>
                                {
                                    this.state.cards1.map((cards, i) => {
                                        return (
                                            <CardsHeader key={i} cards={cards} />
                                        )
                                    })

                                }


                            </Row>
                        </div>
                        </Container>
                    </section>
                    <section className="contenedor-tarjetas ">
                        <div className="seccion-inicio">
                            <h4>¿Qué organos puedes Donar?</h4>

                        </div>
                        <Container>
                            {/**esta clase para poder centrar los cards */}
                        <div className="offset-2 col-10">
                            <Row>
                                {
                                    this.state.cards1.map((cards, i) => {
                                        return (
                                            <CardsHeader key={i} cards={cards} />
                                        )
                                    })

                                }


                            </Row>
                        </div>
                        </Container>
                    </section>

                </div>
            </React.Fragment>
        );
    }
}
export default DoancionOyT;

