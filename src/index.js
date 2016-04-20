import React from 'react';
import { findDOMNode } from 'react-dom';
import Stickyfill from 'stickyfill';
let stickyfill = null;
export default class Sticky extends React.Component {

  static get defaultProps() {
    return {
      className: '',
      tag: 'div',
    };
  }

  componentDidMount() {
    if (stickyfill === null) {
      stickyfill = Stickyfill();
    }
    const children = findDOMNode(this).children;
    for (let i = 0; i < children.length; i += 1) {
      stickyfill.add(children[i]);
    }
  }

  componentWillUnmount() {
    const children = findDOMNode(this).children;
    for (let i = 0; i < children.length; i += 1) {
      stickyfill.remove(children[i]);
    }
  }

  render() {
    const { className, tag: Element, children } = this.props;
    return (
      <Element className={`stickyfill ${ className }`}>
        {children}
      </Element>
    );
  }

}

if (process.env.NODE_ENV !== 'production') {
  Sticky.propTypes = {
    className: React.PropTypes.string,
    tag: React.PropTypes.string,
    children: React.PropTypes.node.isRequired,
  };
}
