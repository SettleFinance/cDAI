import React from 'react';

import Utility from '../utility'

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let {order, orderModel, trade, amount, source, pair, type} = this.props;
    return (
      <button onClick={()=>trade()} disabled={order==orderModel}>
        {type=='buy'?'Buy':'Sell'} {amount} cDAI for {source.price ? Utility.formatPrice(source.price*amount):'...'} {pair.from}
      </button>
    );
  }
}
