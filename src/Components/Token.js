import React from 'react';

export default class Token extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
  }
  render() {
    let {type, changeToken} = this.props;
    let token = type=='to'?'DAI':'ETH';
    return (
      <select defaultValue={token} onChange={(e)=>changeToken(type, e.target.value)}>
        <option value="ETH">ETH</option>
        <option value="DAI">DAI</option>
        <option value="MKR">MKR</option>
        <option value="BAT">BAT</option>
        <option value="USDC">USDC</option>
        <option value="LINK">LINK</option>
        <option value="KNC">KNC</option>
        <option value="ZRX">ZRX</option>
      </select>
    );
  }
}
