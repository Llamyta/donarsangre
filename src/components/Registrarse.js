import React from 'react'
import Formulario from './Formulario';
import Logo from '../assets/images/google.jpg'

import { Button } from 'react-bootstrap';
class Registrarse extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div>

                    <section className="Espaciados" style={{ textAlign: 'center' }}>
                        <div className="Espaciados">
                            <h3>Formulario de Registro</h3>

                        </div>
                        <Button variant="primary" type="submit" style={{width:'272px'}} >
                            <img src={Logo} style={{width: '36px', height: '36px',marginRight : '5%'} }/>
                            <label>
                                iniciar sesion con google
                            </label>
                        </Button>


                        
                        <Formulario aux="true" />
                    </section>
                </div>

            </React.Fragment>
        );
    }
}
export default Registrarse;

