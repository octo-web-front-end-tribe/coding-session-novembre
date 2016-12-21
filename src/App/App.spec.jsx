import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from './App';
import AutocompleteInput from '../AutocompleteInput/AutocompleteInput';
import LeafletMap from '../LeafletMap/LeafletMap';
import SimpleInput from '../SimpleInput/SimpleInput';

describe('App component', () => {
  it('should contain AutocompleteInput and LeafletMap', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.containsMatchingElement(<AutocompleteInput />)).to.equal(true);
    expect(wrapper.containsMatchingElement(<LeafletMap />)).to.equal(true);
  });

  it('should contain two SimpleInputs', () => {
    const wrapper = shallow(<App />);
    const simpleInputs = wrapper.find(SimpleInput);

    expect(simpleInputs).to.have.length(2);

    expect(simpleInputs.at(0).prop('id')).to.equal('label');
    expect(simpleInputs.at(1).prop('id')).to.equal('color');

    expect(simpleInputs.at(0).prop('onChange')).to.equal(wrapper.instance().onChange);
    expect(simpleInputs.at(1).prop('onChange')).to.equal(wrapper.instance().onChange);
  });

  describe('centerOn', () => {
    it('should set longitude and latitude', () => {
      const wrapper = shallow(<App />);

      wrapper.instance().centerOn([1, 2]);

      expect(wrapper.state('long')).to.equal(1);
      expect(wrapper.state('lat')).to.equal(2);
    });
  });
});
