import React, { Component } from 'react';
import './CardCible.css';
import Card from './Card';

class CardCible extends Component{
    render(){
        return (
        <div className = "ZoneCartesCible">
            {
            
            
            this.props.dekkValeur.map((card)=>{
                return <Card
                
                
                
                
                className="Card"
                value={card.value}
                color={card.color}
                backgroundImage={card.backgroundImage}

                
                >
                    {card.value}
                </Card>
            })}
        </div>
    )
}
}



export default CardCible;