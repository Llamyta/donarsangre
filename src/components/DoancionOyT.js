import React from 'react'
import Formulario from './Formulario';
import CardsHeader from './CardsHeader';

import { Container, Row, Col  } from 'react-bootstrap';

import Fondo from '../assets/images/fondoseccionorganos2.jpg'
import img from '../assets/images/Requisitosdonarorganos.png'
import img2 from '../assets/images/Requisitosdonarorganos2.png'
import img3 from '../assets/images/Requisitosdonarorganos3.png'
import img4 from '../assets/images/Requisitosdonarorganos4.png'
import Logo from '../assets/images/organos.png'
import Logo1 from '../assets/images/tejido.png'



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
                            height: '700px'

                        }}>

                    </div>

                </div>
                <div className="seccion-inicio">
                    <div className="Espaciados">
                        <h3>Requisitos para donar Organos</h3>
                        
                        <Container style={{ marginBottom: '5%' }}>
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
               
                 <div >
                    <section className="contenedor-tarjetas ">
                        <div className="seccion-inicio">
                            <h3>¿Que Organos puedo Donar?</h3>

                        </div>
                        <Container  style={{ marginBottom: '5%' }}>
                        <Row>
                            <Col>
                                <img src={Logo} alt='...' style={{ width: 'auto', padding: '0 5% 0 5%' }}></img>                            
                            </Col>
                            <Col>
                                <img src={Logo1} alt='...' style={{ width: 'auto', padding: '0 5% 0 5%' }}></img>    
                            </Col>
                        </Row>
                        </Container>
                    </section>
                   

                </div>
            </React.Fragment>
        );
    }
}
export default DoancionOyT;

