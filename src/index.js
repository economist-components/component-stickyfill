import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import Stickyfill from 'stickyfill';
let stickyfill = null;
export default class Sticky extends React.Component {
  componentDidMount() {
    if (stickyfill === null) {
      stickyfill = Stickyfill();
    }
    const children = findDOMNode(this).children;
    for (let i = 0; i < children.length; i += 1) {
      stickyfill.add(children[i]);
    }
  }

  componentDidUpdate() {
    // force a rebuild at every change
    stickyfill.rebuild();
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

Sticky.defaultProps = {
  className: '',
  tag: 'div',
};

if (process.env.NODE_ENV !== 'production') {
  Sticky.propTypes = {
    className: PropTypes.string,
    tag: PropTypes.string,
    children: PropTypes.node.isRequired,
  };
}
