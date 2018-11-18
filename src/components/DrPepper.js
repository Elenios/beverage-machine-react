import React, { Component } from 'react';

class DrPepper extends Component {
  
  state = {
    name: 'Dr.Pepper',
    id: 6,
    details: 'Dr Pepper\'s unique, sparkling blend of 23 fruit flavours has been around for well over a century and has that distinctive flavour taste you just can\'t quite put your finger on.',
    calories: '29 kcal / 100 ml',
    smallimg: 'img/drpepper-small.png',
    largeimg: 'img/drpepper-large.jpg',
    url: 'http://localhost:3000/DrPepper.js',
  };
  
  render() {
    return (
      <div className="DrPepper">
        <h1>{this.state.name}</h1>
        <img alt={this.state.name} src={require(`../../${this.state.largeimg}`)} />
        <h2>{this.state.calories}</h2>
        <h3>{this.state.details}</h3>
      </div>
    );
  }
}

export default DrPepper;