import React from 'react';

export default class Amount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let {changeAmount, pair, bottom, input, loaded} = this.props;
    if(pair==undefined) pair = {}
    return (
      <div className="amount">
        <input type="number" defaultValue="1" disabled={!loaded} className={!loaded&&'input-loading'} onChange={(e)=>changeAmount(e.target.value, bottom)} value={input[bottom?'bottom':'top']} /> {bottom&&pair.to}
      </div>
    );
  }
}
