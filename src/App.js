import React, { Component } from 'react';
import './App.css';

import CurrencyConverter from './Components/CurrencyConverter/CurrencyCOnverter'

class App extends Component {
  render() {
    return(
      <>
      <h2>Render Props</h2>
      <CurrencyConverter render={() => {}} />
      </>
    )
  }
}

export default App