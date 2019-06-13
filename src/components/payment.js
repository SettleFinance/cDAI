import React from 'react';

import Amount from './amount'
import Token from './token'

export default class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let {pair, changeAmount, findTrades, changeToken, changeType, type, input, loaded} = this.props;
    return (
      <div className="title">
        <div className="buy-sell">
          <span className={type=='buy'&&"selected"} onClick={()=>changeType('buy')}>buy</span>
          <span className={type=='sell'&&"selected"} onClick={()=>changeType('sell')}>sell</span>
        </div>
        <div>
          <p>{type=='buy'?'pay':'receive'}:</p>
          <Amount changeAmount={changeAmount} pair={pair} bottom={false} input={input} loaded={loaded} />
          <Token type="from" pair={pair} findTrades={findTrades} changeToken={changeToken}/>
        </div>
        <div>
          <p>for:</p>
          <Amount changeAmount={changeAmount} pair={pair} bottom={true} input={input} loaded={loaded} />
        </div>
      </div>
    );
  }
}
