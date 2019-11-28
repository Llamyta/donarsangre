import React from 'react'

import CardsHeader from './CardsHeader';

import { Container, Row, Col, Card } from 'react-bootstrap';


import Fondo from '../assets/images/fondousu.jpg'
class Informacionpersonal extends React.Component {
    state = {
        cards: [
            { title: 'falta ', texto: 'diseñar carnet', estilo: 'tarjetas-img', estilotarjeta: 'cardtamaño2' },
            { title: 'falta',  estilo: 'tarjetas-img', estilotarjeta: 'cardtamaño2' },
            { title: 'falta',   estilo: 'tarjetas-img', estilotarjeta: 'cardtamaño2' }
        ]
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="seccion-inicio">

                        <div className="seccion-inicio" >
                            <h4>Informacion personal</h4>
                        </div>
                        <div>
                            <div style={{ textAlign: 'center' }} >
                                {/**corregir padding */}
                                <section className="contenedor-tarjetas " >
                                    <Container style={{ paddingLeft: '4%' }}>
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
                        </div>

                    </div>
                </div>

            </React.Fragment >
        );
    }
}
export default Informacionpersonal;

