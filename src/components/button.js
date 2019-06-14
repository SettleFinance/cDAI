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
    console.log(input)
    return (
      <button onClick={()=>trade()} disabled={order==orderModel}>
        {type=='buy'?'Buy':'Sell'} {input['bottom']} cDAI for {source.price ? Utility.formatPrice(input['top']):'...'} {pair.from}
      </button>
    );
  }
}
