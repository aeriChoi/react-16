import React, { Component } from 'react';
import { createPortal } from 'react-dom';

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
  state = {
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    console.log(`에러: ${error} 발생. 에러 정보: ${JSON.stringify(errorInfo)}`);
    this.setState({
      hasError: true
    })
  }

  render() {
    const { hasError } = this.state;
    return (
      <>
        { hasError ?
          <ErrorFallback /> :
          <>
            <ReturnTypes />
            <Portals />
            <ErrorMaker />
          </>
        }
      </>
    );
  }
}

export default App;
