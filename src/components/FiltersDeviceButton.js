import React, { Component } from 'react';

export default class FiltersDeviceButton extends Component {
  render () {
    return (
      <a href="#" className="now-showing__device-filters-btn">
        <svg width="13" height="13" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.944.36c.105.252.062.467-.129.645L8.27 5.55v6.841c0 .258-.12.44-.36.544a.641.641 0 0 1-.23.046.548.548 0 0 1-.415-.175l-2.36-2.36a.567.567 0 0 1-.175-.415V5.55L.185 1.004C-.006.827-.05.612.055.36A.551.551 0 0 1 .6 0h11.802c.258 0 .439.12.543.36z" fill="currentColor" fillRule="nonzero"/>
        </svg>

        Filter results
      </a>
    );
  }
}
