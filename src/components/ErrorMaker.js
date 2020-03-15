import { Component } from 'react';

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
};

export default ErrorMaker