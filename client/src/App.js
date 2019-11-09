import React from 'react';
import PlayerCard from './Components/PlayerCard';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataPlayers: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:5000/api/players/`)
      .then(res => res.json())
      .then(player => this.setState({ dataPlayers: player}))
      .catch(err => console.log('hey', err))

  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Women's World Cup</h1>
        {this.state.dataPlayers.map(player => <PlayerCard key={player.id} name={player.name} country={player.country} searches={player.searches} />)}
      </div>
    );
  }

}

export default App;
