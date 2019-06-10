import React from 'react';

export default class Token extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let {type, changeToken} = this.props;
    let token = type=='to'?'cDAI':'DAI';
    console.log(token)
    return (
      <span className="token-dropdown-container">
        <select defaultValue={token} onChange={(e)=>changeToken(type, e.target.value)}>
          {token!='DAI'&&<option value="cDAI">cDAI</option>}
          <option value="DAI">DAI</option>
          <option value="ETH">ETH</option>
          <option value="USDC">USDC</option>
          <option value="MKR">MKR</option>
          <option value="BAT">BAT</option>
          <option value="LINK">LINK</option>
          <option value="ZRX">ZRX</option>
          <option value="KNC">KNC</option>
          <option value="BNT">BNT</option>
          <option value="WBTC">WBTC</option>
          <option value="SUSD">SUSD</option>
          <option value="TUSD">TUSD</option>
          <option value="DGX">DGX</option>
          <option value="SNT">SNT</option>
        </select>
        <img src="/arrow_down.svg" />
      </span>
    );
  }
}
