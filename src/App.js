import React, { Component } from 'react';
import BeverageList from './BeverageList';
import Terminal from './Terminal';

class App extends Component {

  state = {
    beverages: [
      {
        name: 'Coca Cola',
        id: 1,
        details: 'Coca-Cola original taste is the world’s favourite soft drink and has been enjoyed since 1886. Whether you want a small 250ml can or a large 1.75 litre bottle for sharing, you can find Coca-Cola original taste in a variety of sizes to suit every lifestyle and occassion.',
        calories: '42 kcal / 100 ml',
        smallimg: 'img/coke-small.jpg',
        largeimg: 'img/coke-large.jpg',
        url: 'http://localhost:3000/coke',
        selected: false,
      },
      {
        name: 'Coca Cola Zero',
        id: 2,
        details: 'Coca-Cola zero sugar is a new and improved sugar free cola, that looks and tastes even more like Coca-Cola original taste, but without the sugar. It replaces Coca-Cola Zero and is the next step in our strategy to help people reduce their sugar intake.',
        calories: '0.3 kcal / 100 ml',
        smallimg: 'img/cokezero-small.png',
        largeimg: 'img/cokezero-large.jpg',
        url: 'http://localhost:3000/cokezero',
        selected: false,
      },
      {
        name: 'Fanta',
        id: 3,
        details: 'Fanta Orange is a delicious, sparkling soft drink made with natural flavours, no artifical colours and real orange juice. It was launched in the island of Ireland in 1963 and also comes in a no-Calorie version, Fanta Orange Zero.',
        calories: '19 kcal / 100 ml',
        smallimg: 'img/fanta-small.jpg',
        largeimg: 'img/fanta-large.jpg',
        url: 'http://localhost:3000/fanta',
        selected: false,
      },
      {
        name: 'Sprite',
        id: 4,
        details: 'First introduced in 1961, crisp, refreshing, clean-tasting Sprite is now sold in more than 190 countries. Sprite was launched in Northern Ireland in 1994 and in the Republic of Ireland in 2001.',
        calories: '1 kcal / 100 ml',
        smallimg: 'img/sprite-small.png',
        largeimg: 'img/sprite-large.jpg',
        url: 'http://localhost:3000/sprite',
        selected: false,
      },
      {
        name: 'Schweppes Ginger Ale',
        id: 5,
        details: 'Schweppes Ginger Ale is part of the Schweppes Mixers range. They can be enjoyed on their own or combined with alcohol or fruit juice.',
        calories: '37 kcal / 100 ml',
        smallimg: 'img/schweppes-small.png',
        largeimg: 'img/schweppes-large.jpg',
        url: 'http://localhost:3000/schweppes',
        selected: false,
      },
      {
        name: 'Dr.Pepper',
        id: 6,
        details: 'Dr Pepper\'s unique, sparkling blend of 23 fruit flavours has been around for well over a century and has that distinctive flavour taste you just can\'t quite put your finger on.',
        calories: '29 kcal / 100 ml',
        smallimg: 'img/drpepper-small.png',
        largeimg: 'img/drpepper-large.jpg',
        url: 'http://localhost:3000/drpepper',
        selected: false,
      },
    ],
  };

  onClickHandle = (id) => () => {
    this.setState({
      beverages: this.state.beverages.map(beverage => (beverage.id === id) ? {...beverage, selected: true} : {...beverage, selected: false})
    });
  };

  render() {
    return (
      <div className="App">
        <Terminal selectedBeverage={this.state.beverages.find(beverage => beverage.selected)}/>
        <BeverageList onClickEvent={this.onClickHandle} beverages={this.state.beverages} />
      </div>
    );
  }
}

export default App;
