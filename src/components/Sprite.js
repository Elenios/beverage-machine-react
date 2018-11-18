import React, { Component } from 'react';

class Sprite extends Component {
  
  state = {
    name: 'Sprite',
    id: 4,
    details: 'First introduced in 1961, crisp, refreshing, clean-tasting Sprite is now sold in more than 190 countries. Sprite was launched in Northern Ireland in 1994 and in the Republic of Ireland in 2001.',
    calories: '1 kcal / 100 ml',
    smallimg: 'img/sprite-small.png',
    largeimg: 'img/sprite-large.jpg',
    url: 'http://localhost:3000/Sprite.js',
  };
  
  render() {
    return (
      <div className="Sprite">
        <h1>{this.state.name}</h1>
        <img alt={this.state.name} src={require(`../../${this.state.largeimg}`)} />
        <h2>{this.state.calories}</h2>
        <h3>{this.state.details}</h3>
      </div>
    );
  }
}

export default Sprite;