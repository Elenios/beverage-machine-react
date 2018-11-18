import React, { Component } from 'react';
import Beverage from './Beverage';

class BeverageList extends Component {

  renderBeverage = (beverage) => {
    return (
      <Beverage
        onClick={this.props.onClickEvent(beverage.id)} 
        name={beverage.name} 
        calories={beverage.calories} 
        description={beverage.description} 
        id={beverage.id} 
        key={beverage.id} 
        smallimg={beverage.smallimg}
      />
    )};

  render() {
    return (
      <div className="BeverageList">
        {this.props.beverages.map(beverage => this.renderBeverage(beverage))}
      </div>
    );
  }
}

export default BeverageList;
