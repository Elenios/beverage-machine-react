import React, { Component } from 'react';

class Terminal extends Component {

  state = {
    name: null,
    calories: null,
    info: null,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.selectedBeverage.name,
      calories: nextProps.selectedBeverage.calories,
      info: nextProps.selectedBeverage.url,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="Terminal">
        {this.state.name ? <div>
          <h2>{this.state.name}</h2>
          <h3>{this.state.calories}</h3>
          <a href={this.state.info}>More info</a>
        </div> : <h3>Select a beverage</h3>}
      </div>
    );
  }
}

export default Terminal;
