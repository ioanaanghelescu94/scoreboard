import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Player from './Player';
import AddPlayer from './AddPlayer';

//App top -level -component
//Components =  parent - child relationship
//class App extends Component se scria inainte
// App =  React.createClass({
//   render: function() {
//   }
// })

class App extends Component {

  state = {
    players: [
        {
            name: "Michael",
            score: 0,
            id: 1
        },
        // selectam ceva comun, de ex ", si apoi ctrl + D si scrie peste tot
        {
            name: "Andreea",
            score: 0,
            id: 2
        },
        {
            name: "John",
            score: 0,
            id: 3
        },
        {
            name: "Gabi",
            score: 0,
            id: 4
        },
        {
          name: "Ioana",
          score: 0,
          id: 5
      }
    ]
};


  //custom methods:
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( p => { return p.id !== id } )
      };
    });
  }

//*** Nu inteleg partea cu p => {return p.id !== id} ce e p?? si ce e filter? si de ce players: ?  

//  handleRemovePlayer = (id) => {
//   this.setState( prevState => ({
//     players: prevState.players.filter( p => { return p.id !== id } )
//   }));
// }
//se mai poate scrie asa si at la this.setState, avand functie anonima, nu mai punem return

  handleScoreChange = (index, direction) => {
    console.log('score change');
    // dupa ce ne dam seama la ce player schimbam scorul? dupa id sau index
    //trb sa se stie ce a apasa, plusul sau minusul
    this.setState( prevState => {
      return {
        score: prevState.players[index].score += direction
        //prevState.players.score = prevState.players.score + direction
        //handleScoreChange e transmis prin scoreChange din app pana in Counter, unde are 2 parametri (index, direction) si in loc de direction avem -1 1
      }
      //sau prevstate => ({ score: prevState})
      //players[index] indexul trasmis prin index = {props.index}  din App in Player in Counter
    })
  };
  //metoda pe care o apelam pana in Counter, adica pprin toate componentele prin props

  handleAddPlayer = (name) => {
    console.log('add player');

    let players = this.state.players;

    const newState =  this.state.players.concat(
      {
      name: name,
      score: 0,
      id: this.state.players[this.state.players.length -1].id + 1 
      } 
    )
    //name: name - a doilea name e parametrul - data pasat cu propr in componenta
    //o sa coincida cu value
  // concatenam array [] sau obiectu {}
    

    // react nu stie ca s-a apelat state-ul, trb cu setState

    this.setState(prevState => {

        console.log(newState);
        //console log nu sta in return
      return {
        players: newState
      }
   
    })

    //de docuentat despre metodele push si concat
    //push nu returneaza string
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard"
                totalPlayers={this.state.players.length}
        />

        { this.state.players.map( (player, index) => {
          return <Player name= { player.name }
                         id= { player.id}
                         key= { player.id.toString() }
                         removePlayer= { this.handleRemovePlayer }
                         changeScore = { this.handleScoreChange }
                         index = {index}
                         //parametru transmis lui player subnumele alCui
                         score = {player.score}
                 />
        }) }

        {/*player e un parametru care reprezinta cate un item pe rand din obiectul player */}
        {/* ********ce e key-ul ? */}

        <AddPlayer addPlayer = { this.handleAddPlayer }/>
      </div>
    );
  }
}

export default App;
