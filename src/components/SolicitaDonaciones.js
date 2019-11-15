import React from 'react'
import Formulario from './Formulario';
import CardsHeader from './CardsHeader';

import { Container, Row } from 'react-bootstrap';

import img1 from '../assets/images/registrate a la pagina.png'
import img2 from '../assets/images/reserva una cita en un hospital cercano.png'
import img3 from '../assets/images/registrate a la pagina.png'
import img4 from '../assets/images/registrate a la pagina.png'

class SolicitaDonaciones extends React.Component {
    state = {
        cards: [
            { title: 'Llena', texto: 'Llena la información para poder crear una solicitud de donantes', img: img1, estilo: 'tarjetas-img',estilotarjeta:'cardtamaño2' },
            { title: 'Registra', texto: 'Crea en el sitio tu campaña', img: img2, estilo: 'tarjetas-img',estilotarjeta:'cardtamaño2' },
            { title: 'Comparte', texto: 'Comparte en tus redes sociales y junta los donantes necesarios', img: img3, estilo: 'tarjetas-img',estilotarjeta:'cardtamaño2' }
        ]
    };
    render() {
        return (
            <React.Fragment>
                 <div  style={{ textAlign:'center'}} >
                    {/**corregir padding */}
                <section className="contenedor-tarjetas " >
                    <div className="seccion-inicio" >
                    <h4>¿Como funciona el proceso de solicitud?</h4>

                    </div>
                        <Container style={{paddingLeft:'4%'}}>
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
                        <h4>Formulario de Solicitud de Donadores</h4>


                        <Formulario
                            aux2="true" />
                    </section>
                </div>

            </React.Fragment>
        );
    }
}
export default SolicitaDonaciones;

