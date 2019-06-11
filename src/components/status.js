import React from 'react';

export default class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let {web3Status, closeStatus} = this.props;
    if(!web3Status) web3Status = {} // default state
    let{status, data} = web3Status;
    return (
      <div className="status-message">
        {status&&<div>
          {status=='init'&&<h3>Preparing the trade…</h3>}
          {status=='web3_undefined'&&<h3>Enable your wallet and reload the page</h3>}
          {status=='network'&&<h3>Switch to main Ethereum network</h3>}
          {status=='balance'&&<h3>Your balance is insufficient</h3>}
          {status=='rejected'&&<h3>Trade rejected</h3>}
          {status=='request_wrap'&&<h3>Wrap ETH to fill the trade</h3>}
          {status=='allowance'&&<h3>Unlock the token to continue</h3>}
          {status=='bad_tx'&&<h3>The Tx is not valid</h3>}
          {status=='unlock_wallet'&&<h3>Unlock your web3 wallet</h3>}
          {status=='failed'&&<h3>Trade failed - {this.etherScan(data)}</h3>}
          {status=='bancor_notice'&&<h3><strong>Bancor Notice:</strong> Changing the gas price will result in a failed transaction</h3>}
          {(status=='send_trade'||status=='send_wrap')&&<h3>Waiting to be mined - {this.etherScan(data)}</h3>}
          {(status=='mined_trade'||status=='mined_approve'||status=='mined_wrap')&&<h3> <img src="/checkmark.png" /> Transaction mined - {this.etherScan(data)}</h3>}
          <h2 onClick={closeStatus}>Close</h2>
        </div>}
      </div>
    );
  }
}
