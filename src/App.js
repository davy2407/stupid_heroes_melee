import React ,{Component} from 'react';
import Board from './components/Board';
import BoardNonACtif from './components/BoardNonActif';
import styled, { keyframes } from "styled-components";
import CardCible from './components/CardCible';

// import ModalChange from './components/Modal';

import './App.css';




import Crop from './images/crop.jpg'
import Goku from './images/Goku.jpg'
import Hunter from './images/hunter.jpg'
import Mibu from './images/Mibu.jpg'
import Saitama from './images/Saitama.png'
import Train from './images/Train.jpg'
import Guts from './images/Guts.jpg'
import Kenshin from './images/Kenshin.jpg'
import Naruto from './images/Naruto.jpg'
import Eren from './images/Eren.png'
import Gto from './images/GTO.jpg'
import Meliodas from './images/Meliodas.png'
import Ken from './images/Ken.jpg'
import Alita from './images/Alita.png'
import Jojo from './images/Jojo.jpg'
import Dos from './images/dos_un.png'




// const AllCards = {
//   colors: ['Red', 'Black'],
//   shape: ['Heart', 'Tile', 'Clover', 'Pike'],
//   cards: [
//       1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
//   ]
// };

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      nombreJoueurs : 0,
      joueurs : [],
      joueurAdversaires: [],
      carteEnJeu : {value : 0, color : 'red' , backgroundImage : Dos,name: 'Goku'},
      deckCarteAGagner : [
        {value : 1, color : 'red', backgroundImage : Dos ,name: 'Goku' },
        {value : 2, color : 'red',backgroundImage : Dos,name: 'Goku'},
        {value : 3, color : 'red' , backgroundImage : Dos,name: 'Goku'},
        {value : 4, color : 'red',backgroundImage : Dos,name: 'Goku'},
        {value : 5, color : 'red',backgroundImage : Dos,name: 'Goku'},
        {value : 6, color : 'red',backgroundImage : Dos,name: 'Goku'},
        {value : 7, color : 'red',backgroundImage : Dos,name: 'Goku'},
        {value : 8, color : 'red',backgroundImage :Dos,name: 'Goku'},
        {value : 9, color : 'red',backgroundImage :Dos,name: 'Goku'},
        {value : 10, color : 'red',backgroundImage :Dos,name: 'Goku'},
        {value : -1, color : 'red',backgroundImage :Dos,name: 'Goku'},
        {value : -2, color : 'red',backgroundImage : Dos,name: 'Goku'},
        {value : -3, color : 'red',backgroundImage :Dos,name: 'Goku'},
        {value : -4, color : 'red',backgroundImage :Dos,name: 'Goku'},
        {value : -5, color : 'red',backgroundImage :Dos,name: 'Goku' }
      ],
      deck   : [
        {value : 1, color : 'red', backgroundImage : Goku ,name: 'Goku',trace : 0 },
        {value : 2, color : 'red',backgroundImage : Crop,name: 'Goku',trace : 0},
        {value : 3, color : 'red' , backgroundImage : Hunter,name: 'Goku',trace : 0},
        {value : 4, color : 'red',backgroundImage : Mibu,name: 'Goku',trace : 0},
        {value : 5, color : 'red',backgroundImage : Saitama,name: 'Goku',trace : 0},
        {value : 6, color : 'red',backgroundImage : Train,name: 'Goku',trace : 0},
        {value : 7, color : 'red',backgroundImage : Guts,name: 'Goku',trace : 0},
        {value : 8, color : 'red',backgroundImage :Kenshin,name: 'Goku',trace : 0},
        {value : 9, color : 'red',backgroundImage :Naruto,name: 'Goku',trace : 0},
        {value : 10, color : 'red',backgroundImage :Eren,name: 'Goku',trace : 0},
        {value : 11, color : 'red',backgroundImage :Gto,name: 'Goku',trace : 0},
        {value : 12, color : 'red',backgroundImage : Meliodas,name: 'Goku',trace : 0},
        {value : 13, color : 'red',backgroundImage :Ken,name: 'Goku',trace : 0},
        {value : 14, color : 'red',backgroundImage :Alita,name: 'Goku',trace : 0},
        {value : 15, color : 'red',backgroundImage :Jojo,name: 'Goku',trace : 0 }
      ],
      carteJoueesParJoueur : [],
      currentPlayer : {
        nom : "",
        id : "",
        
        deckJoueur :  [
          
        ],
        score : 0
      }
      
      }
      
    }
    // togglePopup() {  
    //   // this.setState({  
    //   //      showPopup: !this.state.showPopup  
    //   // });
    //   var nbJoueurs = prompt("???");
    //   console.log(nbJoueurs);  
    //    }
    

    startGame = () =>{
      let nbJoueurs = 0;
      while (nbJoueurs===0||nbJoueurs>5) {
        nbJoueurs = parseInt(prompt("Nombre de Joueurs : "));

        
      }
      
      
      this.setState({nombreJoueurs:nbJoueurs})
      var listeJ = [];
      var deckk = this.state.deck;
      for (let i = 1; i <= nbJoueurs; i++) {
        let nomJOueur = prompt("Entrer un nom : ");
        let joueur = {
                      nom : nomJOueur,
                      id: i,
                      deckJoueur : deckk,
                      score : 0
                    };
        listeJ.push(joueur);
         }
        
        
        
      this.setState({joueurs:listeJ});
      
      this.setState({currentPlayer:listeJ[0]})
      
      this.modifierListeAd(listeJ,listeJ[0].id);
      this.choisiCarteAuHasardCArteAGagner();
      
      
      
      
       
    }


    /// function modifie liste adversaire 

    modifierListeAd = (listeJou,index) =>{
      var listeCompleteJoueurs = listeJou;
      listeCompleteJoueurs.splice(0,1);
      for (let i = 0; i < listeCompleteJoueurs.length; i++) {
        if (listeCompleteJoueurs[i].id===index) {
          listeCompleteJoueurs.splice(listeCompleteJoueurs[i]);
        }
        
      }
      this.setState({joueurAdversaires:listeCompleteJoueurs})

    }




    

    modifierCarteJOueesParJOueurs = (carteSel) => {
      let carteAPush = carteSel;
      let listeCarte = this.state.carteJoueesParJoueur;
      listeCarte.push(carteAPush);
      carteAPush.trace = this.state.currentPlayer.id;
      console.log(carteAPush.trace);
      this.setState({carteJoueesParJoueur : listeCarte})
      
    }


    modifierBoardNonActif = (nbAdversaire) =>{
      let majAdversaire = nbAdversaire;
      this.setState({nombreJoueurs:majAdversaire})
      
    }

    finDeTour = () => {
      let listeAdversaires = this.state.joueurAdversaires;
      let nouveauCurrentPlayer = listeAdversaires[0];
      let ancienCurrentPlayer = this.state.currentPlayer;
      listeAdversaires.splice(0,1);
      listeAdversaires.push(ancienCurrentPlayer);
      this.setState({joueurAdversaires:listeAdversaires});
      this.setState({currentPlayer:nouveauCurrentPlayer});
      this.choisiCarteAuHasardCArteAGagner();
      
      
      
      
    }
    removeCard = (joueur,id) => {
      let objetJoueurActif = joueur;
      let cartesRestante = [...objetJoueurActif.deckJoueur];
      const index = cartesRestante.findIndex(card => card.value === id);
      let carteSel = cartesRestante.find(card => card.value === id);
      console.log(carteSel);
      
      this.modifierCarteJOueesParJOueurs(carteSel);
      cartesRestante.splice(index,1);
      objetJoueurActif.deckJoueur = [...cartesRestante];
      
      

      
      
      
  
      
      // console.log(cartesRestante);
      this.setState({currentPlayer : objetJoueurActif});
      
      ;
  }

    choisiCarteAuHasardCArteAGagner =()=>{

      let CardAGagner = this.state.deckCarteAGagner;
      if (CardAGagner.length <=0) {
        alert('fin');
        
      }else{
        
      let randomCard = CardAGagner[Math.floor(Math.random() * CardAGagner.length)];
      let index = randomCard.value;
      let carteOut = CardAGagner.findIndex(card => card.value === index);
      CardAGagner.splice(carteOut,1);

      this.setState({carteEnJeu:randomCard});
      this.setState({deckCarteAGagner:CardAGagner});
      }


  };

  changeLaTrace = (deckATracer) => {

    let objetCurrentPLayer = deckATracer;
    console.log(objetCurrentPLayer);
    // for (let i = 0;  i<= objetCurrentPLayer.deckJoueur.length; i++) {
    //   objetCurrentPLayer.deckJoueur[i].trace = objetCurrentPLayer.id
      
    // }
    // this.setState({currentPlayer:objetCurrentPLayer});


  }
  

  

  
  

  render() {
  return (
    <div className="App">
      
     
  <p className="NombreJ">Nombre de joueurs : {this.state.nombreJoueurs}</p>
  <BoardNonACtif nombreAdversaire={this.state.nombreJoueurs}
                  onNombreAdversaireMAJ={this.modifierBoardNonActif}
                  onJoueurs={this.state.joueurAdversaires}>


  </BoardNonACtif>
    

  


      <div className = "PlateauDeJeu">
        


        <Board className="CarteAGagner"
                deck = {this.state.carteJoueesParJoueur}>
          

        </Board>

        <div className="CurrentPlayedCard">


        <button onClick={this.startGame}
          >Démarrer</button>
          <div className="FakeBoard">
            <CardCible
            value={this.state.carteEnJeu.value}
            color={this.state.carteEnJeu.color}
            backgroundImage={this.state.carteEnJeu.backgroundImage}></CardCible>

          </div>

          <button onClick={this.finDeTour}>Joueur suivant</button>

          

        </div>

        <Board deck={this.state.currentPlayer.deckJoueur}
                onCurrentPlayer = {this.state.currentPlayer}
                // onDelete = {this.state.removeCard}
                onRemove={this.removeCard}
                onTrace={this.changeLaTrace}
                >

        </Board>

  <p className="testCurrent">Current Player : {this.state.currentPlayer.id}
  {this.state.currentPlayer.nom}
  </p>



      </div>
      
    </div>
  );
  }
}


