import React, { Component } from 'react';

const ErrorFallback = () => "에러가 발생 했습니다. 다음에 다시 이용해 주세요.";

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

export default BoundaryHOC;