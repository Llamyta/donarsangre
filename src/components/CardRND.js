import React from 'react'




import { Image } from 'react-bootstrap'

class CardRND extends React.Component {
    render() {
        const { texto, img } = this.props.cards;
        return (
            <React.Fragment>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Image src={img} roundedCircle className="img-fluid" />
                            </div>
                            <div className="flip-card-back">
                                <p>{texto}</p>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}
export default CardRND;

