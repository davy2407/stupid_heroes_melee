import React,{Component} from 'react';
import './Adversaire.css'

class Adversaire extends Component{

    render(){
    return(
        <div className="AdversaireContainer">
            
            {/* Numero du joueur
            nombre de cartes
            image premiere cartes */}
            {this.props.onId.id}
            {this.props.onId.nom}


        </div>
        
    )
    }
}

export default Adversaire;