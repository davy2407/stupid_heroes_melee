import React,{Component} from 'react';
import Adversaire from './Adversaire';
import './BoardNonActif.css';


class BoardNonActif extends Component{
   

  
    
    
   

    render(){
        return (
        <div className = "ZoneAdversaires">
            
            {this.props.onJoueurs.map((joueur)=>{
                return(
                    <Adversaire onId ={joueur   }></Adversaire>

                )
            } )}
            
            
        </div>
    )
}}


export default BoardNonActif;