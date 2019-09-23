import React from 'react';
import ReactDOM from 'react-dom';
import CrudApp from './CrudApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CrudApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
