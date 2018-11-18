import React, { Component } from 'react';

class Coke extends Component {
  
  state = {
    name: 'Coca Cola',
    id: 1,
    details: 'Coca-Cola original taste is the world’s favourite soft drink and has been enjoyed since 1886. Whether you want a small 250ml can or a large 1.75 litre bottle for sharing, you can find Coca-Cola original taste in a variety of sizes to suit every lifestyle and occassion.',
    calories: '42 kcal / 100 ml',
    smallimg: 'img/coke-small.jpg',
    largeimg: 'img/coke-large.jpg',
    url: 'http://localhost:3000/Coke.js',
  };
  
  render() {
    return (
      <div className="Coke">
        <h1>{this.state.name}</h1>
        <img alt={this.state.name} src={require(`../../${this.state.largeimg}`)} />
        <h2>{this.state.calories}</h2>
        <h3>{this.state.details}</h3>
      </div>
    );
  }
}

export default Coke;