import React from 'react';

import Utility from '../utility'

export default class Totals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let {pair, source} = this.props;
    let {price, dex} = source;
    return (
      <div className="price">
        <div className="price-total">
          {price?<div className="price-details">
            Best price found on:  <span className="price-dexname">{Utility.cleanDex(dex)}</span>
          </div>:'Finding best price..'}
        </div>
      </div>
    );
  }
}
