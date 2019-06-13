import React from 'react';

export default class Amount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let {changeAmount, pair, bottom, input} = this.props;
    if(pair==undefined) pair = {}
    return (
      <div className="amount">
        <input type="number" defaultValue="1" onChange={(e)=>changeAmount(e.target.value, bottom)} value={input[bottom?'bottom':'top']} /> {bottom&&pair.to}
      </div>
    );
  }
}
