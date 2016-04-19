import 'babel-polyfill';
import Stickyfill from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
chai.use(chaiEnzyme()).should();
describe('Stickyfill', () => {

  it('renders a React element', () => {
    React.isValidElement(<Stickyfill><div /></Stickyfill>).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let stickyfill = null;
    beforeEach(() => {
      rendered = mount(<Stickyfill><div className="foo-child" /></Stickyfill>);
      stickyfill = rendered.find('.stickyfill');
    });

    it('renders a top level div.stickyfill', () => {
      stickyfill.should.have.tagName('div');
      stickyfill.should.have.className('stickyfill');
    });

    it('renders given children', () => {
      stickyfill.should.have.exactly(1).descendants('.foo-child');
    });

  });

});
