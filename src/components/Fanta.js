import React, { Component } from 'react';

class Fanta extends Component {
  
  state = {
    name: 'Fanta',
    id: 3,
    details: 'Fanta Orange is a delicious, sparkling soft drink made with natural flavours, no artifical colours and real orange juice. It was launched in the island of Ireland in 1963 and also comes in a no-Calorie version, Fanta Orange Zero.',
    calories: '19 kcal / 100 ml',
    smallimg: 'img/fanta-small.jpg',
    largeimg: 'img/fanta-large.jpg',
    url: 'http://localhost:3000/Fanta.js',
  };
  
  render() {
    return (
      <div className="Fanta">
        <h1>{this.state.name}</h1>
        <img alt={this.state.name} src={require(`../../${this.state.largeimg}`)} />
        <h2>{this.state.calories}</h2>
        <h3>{this.state.details}</h3>
      </div>
    );
  }
}

export default Fanta;