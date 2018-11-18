import React, { Component } from 'react';

class Schweppes extends Component {
  
  state = {
    name: 'Schweppes Ginger Ale',
    id: 5,
    details: 'Schweppes Ginger Ale is part of the Schweppes Mixers range. They can be enjoyed on their own or combined with alcohol or fruit juice.',
    calories: '37 kcal / 100 ml',
    smallimg: 'img/schweppes-small.png',
    largeimg: 'img/schweppes-large.jpg',
    url: 'http://localhost:3000/Schweppes.js',
  };
  
  render() {
    return (
      <div className="Schweppes">
        <h1>{this.state.name}</h1>
        <img alt={this.state.name} src={require(`../../${this.state.largeimg}`)} />
        <h2>{this.state.calories}</h2>
        <h3>{this.state.details}</h3>
      </div>
    );
  }
}

export default Schweppes;