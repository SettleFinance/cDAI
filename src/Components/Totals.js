import React from 'react';

export default class Totals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
  }
  cleanDex = (dex) => {
    // format text in UI
    if(dex!=undefined) return dex.replace(/-/g,' ').toLowerCase()
    return dex
  }
  formatPrice = (price) => {
    // handle large and small values
    return price>1?price.toFixed(2):price.toPrecision(2)
  }
  render() {
    let {pair, source} = this.props;
    let {price, dex} = source;
    let priceExists = price!=undefined;
    if(!pair) pair = {} // default state
    if(priceExists) price = parseFloat(price)
    return (
      <div className="price">
        <div className="price-total">
          {!priceExists&&'Finding best price..'}
          {priceExists&&<div className="price-details">
            Best Price: {this.formatPrice(price)} {pair.from} - Total: {this.formatPrice(price*this.props.amount)} {pair.from}
            <span>DEX: {this.cleanDex(dex)}</span>
          </div>}
        </div>
      </div>
    );
  }
}
