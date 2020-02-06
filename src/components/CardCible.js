import React from 'react';
import './CardCible.css'

export default function CardCible(props){
    return(
        // <div className={"CardContainer " + (props.shown ? "Active" : "Toto")}>
        //     <div className="CardBody">
        //         <CardBack/>

        //         <CardFront />
        //     </div>
        // </div>
        
        <button className="CardContainer"
        
      
        
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
                {props.value}</p>
        </button>
        
    )
}