import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById('portals'));
  }
}

const Message = () => 'Just Portals';

export default Portals