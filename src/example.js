import 'babel-polyfill';
import React from 'react';
import Sticky from './';

export default (
  <Sticky className="sticky-example">
    <div className="sticky-element">
      This element will follow your scroll position, bounded to the outer container
    </div>
  </Sticky>
);
