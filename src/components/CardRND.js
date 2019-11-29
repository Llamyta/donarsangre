import React from 'react'

import Imagen from '../assets/images/imagenseccionmotivos.png'



import { Image} from 'react-bootstrap'

class CardRND extends React.Component {
    render() {
        const {texto, img } = this.props.cards;
        return (
            <React.Fragment>
                

                        <section>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                <Image src={img} roundedCircle className="img-fluid"/>
                                </div>
                                    <div className="flip-card-back">
                                        <h1>John Doe</h1>
                                        <p>{texto}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

            </React.Fragment>
                );
            }
        }
        export default CardRND;
        
