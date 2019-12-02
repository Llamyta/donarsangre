import React from 'react'
import Card from './CardRND'
import Fondo from '../assets/images/d3.png'
import Imagen from '../assets/images/imagenseccionmotivos.png'
import Imagen2 from '../assets/images/imagenseccionmotivos2.png'
import Imagen3 from '../assets/images/imagenseccionmotivos3.png'
import Imagen4 from '../assets/images/imagenseccionmotivos4.png'
import Fondo2 from '../assets/images/fondoseccion2.png'
import Logo from '../assets/images/paso1.png'
import Logo2 from '../assets/images/paso2.png'
import Logo3 from '../assets/images/paso3.png'
import Logo4 from '../assets/images/paso4.png'


import {  Container, Row, Col } from 'react-bootstrap'

class Inicio extends React.Component {
    state = {
        cards: [
            { texto: 'Llena tu informacion en el formulario de registro', img: Imagen },
            { texto: 'Llena tu informacion en el formulario de registro', img: Imagen2 },
            { texto: 'Llena tu informacion en el formulario de registro', img: Imagen3 },
            { texto: 'Llena tu informacion en el formulario de registro', img: Imagen4 }
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
                            width: 'auto',
                            height: '600px',

                        }}>

                    </div>

                </div>

                <div className="seccion-inicio">
                    <div className="Espaciados">
                        <h4>¿Por qué Donar Sange?</h4>
                        <Container >
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
                </div>
                <div style={{backgroundColor:'white'}}>
                    <div >
                        
                        <Container style={{margin:'0', padding:'0'}}>
                            <Row>
                                <Col style={{marginLeft:'-10%'}}>
                                <img src={Fondo2}  >
                                </img>                            
                                
                                </Col>
                                <Col>
                                <div className="Espaciados" >
                                <h3>Pasos para Donar Sangre</h3>
                                </div>
                                <Row style={{margin:'0', padding:'0',width:'300px',minHeight:'15vh'}}>
                                <img src={Logo} style={{width:'100px',padding:'0 10px 0 10px'}}></img>  
                                <h5>Registrate al sitio.</h5>

                                </Row>
                                <Row style={{margin:'0', padding:'0',width:'300px',minHeight:'15vh'}}>
                                <img src={Logo2} style={{width:'100px',padding:'0 10px 0 10px'}}></img>  
                                <h5>Registrate al sitio.</h5>

                                </Row>
                                <Row style={{margin:'0', padding:'0',width:'300px' ,minHeight:'15vh'}}>
                                <img src={Logo3} style={{width:'100px',padding:'0 10px 0 10px'}}></img>  
                                <h5>Registrate al sitio.</h5>

                                </Row>
                                <Row style={{margin:'0', padding:'0',width:'300px',minHeight:'15vh'}}>
                                <img src={Logo4} style={{width:'100px',padding:'0 10px 0 10px'}}></img>  
                                <h5>Registrate al sitio.</h5>

                                </Row>
                                </Col>
                            </Row>
                        </Container>

                    </div>
                </div>

            </React.Fragment>
        );
    }
}
export default Inicio;

