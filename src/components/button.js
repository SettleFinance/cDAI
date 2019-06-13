import React from 'react';

import Utility from '../utility'

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let {order, orderModel, trade, input, source, pair, type} = this.props;
    return (
      <button onClick={()=>trade()} disabled={order==orderModel}>
        {type=='buy'?'Buy':'Sell'} {input['bottom']} cDAI for {source.price ? Utility.formatPrice(type=='buy'?source.price*input['bottom']:input['bottom']/source.price):'...'} {pair.from}
      </button>
    );
  }
}
