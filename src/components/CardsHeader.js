import React from 'react'


import { Card, Col,Button } from 'react-bootstrap';

class CardsHeader extends React.Component {
    render() {
        const { title, texto, img, estilo, buton,estilotarjeta } = this.props.cards;
        return (
            <React.Fragment>
                <section className="tarjetas">
                    <Col >
                        <Card border="secondary" className={estilotarjeta}>
                            <div className={estilo}>
                                <Card.Img variant="top" src={img} alt={title} />
                            </div>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {texto}
                                </Card.Text>
                                {buton &&
                                    <div style={{ textAlign: 'center', paddingTop: '10px' }}>
                                        <Button variant="secondary" type="submit" className="botoncards" >
                                            Horarios Disponibles
                                        </Button>
                                    </div>
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                </section>
            </React.Fragment>
        );
    }
}
export default CardsHeader;

