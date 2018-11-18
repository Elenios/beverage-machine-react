import React, { Component } from 'react';

class CokeZero extends Component {
  
  state = {
    name: 'Coca Cola Zero',
    id: 2,
    details: 'Coca-Cola zero sugar is a new and improved sugar free cola, that looks and tastes even more like Coca-Cola original taste, but without the sugar. It replaces Coca-Cola Zero and is the next step in our strategy to help people reduce their sugar intake.',
    calories: '0.3 kcal / 100 ml',
    smallimg: 'img/cokezero-small.png',
    largeimg: 'img/cokezero-large.jpg',
    url: 'http://localhost:3000/CokeZero.js',
  };
  
  render() {
    return (
      <div className="CokeZero">
        <h1>{this.state.name}</h1>
        <img alt={this.state.name} src={require(`../../${this.state.largeimg}`)} />
        <h2>{this.state.calories}</h2>
        <h3>{this.state.details}</h3>
      </div>
    );
  }
}

export default CokeZero;