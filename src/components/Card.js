import React from 'react';
import './Card.css'

export default function Card(props){
    return(
        // <div className={"CardContainer " + (props.shown ? "Active" : "Toto")}>
        //     <div className="CardBody">
        //         <CardBack/>

        //         <CardFront />
        //     </div>
        // </div>
        
        <button className="CardContainer"
        onClick={()=> {
            
            
            props.onnRemove(props.current,props.value);
            props.onnTrace(props.current);
        }
      
        }
         >

        <img
        className="ImageStyle" 
        alt="test" 
        src={props.backgroundImage
                } 
            
            />

            <p
                style={{'color': props.color}
            }

            
            
            >
                {props.value}
                </p>
        </button>
        
    )
}

function CardBack() {
    return(
        <div className="CardSide CardBack NeonPink ">

        </div>
    )
}

function CardFront(props) {
    return (
        <div className="CardSide CardFront NeonPink FlexCenter ">
            <h1>{props.card}</h1>
        </div>
    )
}