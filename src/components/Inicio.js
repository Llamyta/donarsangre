import React from 'react'
import Fondo from '../assets/images/d3.png'
import imagen from '../assets/images/imagenseccionmotivos.png'


import { Image} from 'react-bootstrap'

class Inicio extends React.Component {
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
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                <img src="holder.js/171x180" roundedCircle />
                                </div>
                                    <div className="flip-card-back">
                                        <h1>John Doe</h1>
                                        <p>Architect & Engineer</p>
                                        <p>We love that guy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>

            </React.Fragment>
                );
            }
        }
        export default Inicio;
        
