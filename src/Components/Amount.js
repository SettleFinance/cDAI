import React from 'react';

export default class Amount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let {changeAmount, pair, bottom} = this.props;
    if(pair==undefined) pair = {}
    return (
      <div className="amount">
        <input type="number" defaultValue="1" onChange={(e)=>changeAmount(e.target.value)} /> {bottom&&pair.to}
      </div>
    );
  }
}
