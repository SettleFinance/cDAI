import React from 'react';

export default class Amount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
  }
  render() {
    let {changeAmount, pair} = this.props;
    if(pair==undefined) pair = {}
    return (
      <div className="amount">
        <input defaultValue="1" onChange={(e)=>changeAmount(e.target.value)} /> {pair.to}
      </div>
    );
  }
}
