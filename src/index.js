import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Coke from './components/Coke';
import CokeZero from './components/CokeZero';
import Fanta from './components/Fanta';
import Sprite from './components/Sprite';
import Schweppes from './components/Schweppes';
import DrPepper from './components/DrPepper';

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/coke" component={Coke} />
        <Route path="/cokezero" component={CokeZero} />
        <Route path="/fanta" component={Fanta} />
        <Route path="/sprite" component={Sprite} />
        <Route path="/schweppes" component={Schweppes} />
        <Route path="/drpepper" component={DrPepper} />
      </div>
    </BrowserRouter>,
  document.getElementById('root'),
);
