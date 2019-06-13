import React from 'react';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 0
    };
  }
  componentDidMount(){
    // get dai lend rate
    fetch('https://experimental.defipulse.com/get_dai_rate')
    .then(response => response.json())
    .then(data => {
      this.setState({rate: data.current_DAI_rate})
      console.log(data)
    })
    .catch(error => console.error(error))
  }
  format = (rate) => {
    return parseInt(rate * 100)/100
  }
  render() {
    let {rate} = this.state;
    return (
      <div className="info">
        <img src="/logo.svg" alt="cDAI on DEXAG" />
        <h3>Current rate: <strong>{rate?`${this.format(rate)}%`:'-'} APR</strong> </h3>
      </div>
    );
  }
}
