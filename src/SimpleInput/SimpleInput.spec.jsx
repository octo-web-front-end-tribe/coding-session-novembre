import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import SimpleInput from './SimpleInput';

chai.use(sinonChai);

describe('SimpleInput', () => {
  describe('Props passing', () => {
    it('Should render an input with an id', () => {
      const wrapper = shallow(<SimpleInput id="testId" />);
      expect(wrapper.find('input').prop('id')).to.equal('testId');
    });
  });

  describe('When input value changes', () => {
    it('Should call onChange function', () => {
      const onChangeSpy = sinon.spy();
      const wrapper = shallow(<SimpleInput id="testId" onChange={onChangeSpy} />);
      wrapper.simulate('change', { target: { id: 'testId', value: 'newValue' } });
      expect(onChangeSpy).to.have.been.calledWith('testId', 'newValue');
    });
  });
});
