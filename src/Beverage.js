import React, { Component } from 'react';


class Beverage extends Component {

  render() {
    return (
      <div className="Beverage">
        <img onClick={this.props.onClick} alt={this.props.name} src={require(`../${this.props.smallimg}`)} />
      </div>
    );
  }
}

export default Beverage;
