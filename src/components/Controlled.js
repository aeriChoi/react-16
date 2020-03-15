import React, { Component } from 'react';

const MAX_CANDYS = 20;

const eatCandy = (state, props) => {
  const { candys } = state;

  if(candys < MAX_CANDYS) {
    return {
      candys: candys + 1
    }
  } else {
    return null;
  }
};

class Controlled extends Component {
  state = {
    candys: 0
  };

  _handleClick = () => {
    this.setState(eatCandy);
  };

  render() {
    const { candys } = this.state;

    return (
      <button onClick={this._handleClick}>
        {`오늘은 사탕을 ${candys >= 1 ? `${candys} 개 먹었다.` : `안먹었다,`}`}
      </button>
    )
  }
};

export default Controlled