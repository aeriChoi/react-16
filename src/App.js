import React, { Component } from 'react';
import BoundaryHOC from './components/BoundaryHOC';
import ErrorMaker from  './components/ErrorMaker';
import Portals from  './components/Portals';
import ReturnTypes from  './components/ReturnTypes';

class App extends Component {

  render() {
    return (
      <>
        <ReturnTypes />
        <Portals />
        <ErrorMaker />
      </>
    );
  }
}

export default BoundaryHOC(App);
