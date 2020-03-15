import React, { Component } from 'react';
import BoundaryHOC from './components/BoundaryHOC';
import Controlled from './components/Controlled'

class App extends Component {

  render() {
    return (
      <>
        <Controlled />
      </>
    );
  }
}

export default BoundaryHOC(App);
