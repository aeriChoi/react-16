import * as React from 'react';
import { createPortal } from 'react-dom';

const Portals = () => {
  return createPortal(<Message />, document.getElementById('portals'));
};

const Message = () => 'Just Portals';

const ReturnTypes = () => {
  return (
    'Hello React!'
  );
};

const App = () => {
  return (
    <>
      <ReturnTypes />
      <Portals />
    </>
  );
};

export default App;
