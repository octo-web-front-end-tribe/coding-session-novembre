import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Chai from 'chai';
const enzyme = require('enzyme');

describe('Application', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('Show an input', () => {
    const renderComponent = enzyme.mount(<App />);
    Chai.expect(renderComponent.contains(<input/>)).to.be.true;
  })


});

