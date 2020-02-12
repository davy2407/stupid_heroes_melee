import React,{Component} from 'react';
import './Board.css';
import Card from './Card';

class Board extends Component{
    
    
    
    // removeCard = id => {
    //     let cartesRestante = [...this.props.deck];
    //     const index = cartesRestante.findIndex(card => card.value === id);
    //     let carteSel = cartesRestante.find(card => card.value === id);
    //     console.log(carteSel);
    //     this.setState({carteJouee : carteSel});
    //     this.props.onCarteSel(carteSel);
        
        

        
        
        
    
    //     cartesRestante.splice(index,1);
    //     // console.log(cartesRestante);
    //     this.setState({deck : cartesRestante});
    //     this.props.onMAJ(cartesRestante);
    //     carteSel = [];
    // };

    render(){
        return (
        <div className = "ZoneCartesBoard">
            {this.props.deck.map((card)=>{
                return <Card
                onnTrace={this.props.onTrace}
                current = {this.props.onCurrentPlayer}
                onnRemove={this.props.onRemove}
                name={card.name}
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
}}


export default Board;