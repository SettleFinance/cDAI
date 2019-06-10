import React from 'react';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="info">
        <img src="/logo.svg" alt="cDAI on DEXAG" />
        <h3>Current rate: <strong>7.59% APR</strong> </h3>
      </div>
    );
  }
}
