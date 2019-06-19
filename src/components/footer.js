import React from 'react';

import '../css/footer.css'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="footer-container">
        <span>
          <a href="/" target="_blank" className="standalone-link">What is cDAI</a>?
        </span>
        <div className="footer-text">
          cDAI.io searches Kyber, Bancor, Uniswap and Radar Relay. This site is powered by the <a href="https://docs.dex.ag" target="_blank">DEX.AG SDK</a>.
          Please <a href="https://github.com/SettleFinance/cDAI" target="_blank">fork it</a>.
        </div>
        <div className="footer-links">
          <a href="https://DEX.AG" target="_blank">DEX.AG</a>|
          <a href="https://twitter.com/dex_ag" target="_blank">Twitter</a>|
          <a href="https://discord.gg/UUGrGNG" target="_blank">Discord</a>|
          <a href="https://dex.ag/feedback" target="_blank">Feedback</a>
        </div>
        <span>
          <a href="https://concourseopen.com" target="_blank" className="standalone-link">Concourse Open Community</a>
        </span>
      </div>
    );
  }
}
