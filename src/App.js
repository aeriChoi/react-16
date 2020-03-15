import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const BoundaryHOC = ProtectedComponent =>
  class Boundary extends Component {
    state = {
      hasError: false
    };

    componentDidCatch(error, errorInfo) {
      this.setState({
        hasError: true
      })
    };

    render() {
      const { hasError } = this.state;
      if(hasError) {
        return <ErrorFallback />
      } else {
        return <ProtectedComponent />
      }
    }
  };

class ErrorMaker extends Component {
  state = {
    friends: ['aeri', 'jisu', 'daal', 'flynn']
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      })
    }, 2000);
  };

  render() {
    const { friends } = this.state;

    return friends.map(friend => `${friend}`);
  }
}


class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById('portals'));
  }
}

const Message = () => 'Just Portals';

class ReturnTypes extends Component {
  render() {
    return 'Hello React!';
  }
}

const ErrorFallback = () => "에러가 발생 했습니다. 다음에 다시 이용해 주세요.";

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
