import React, { Component } from 'react';
import {DEXAG} from 'dexag-sdk'

// Components
import Token from './Components/Token'
import Totals from './Components/Totals'
import Status from './Components/Status'
import Amount from './Components/Amount'

const sdk = new DEXAG()
const orderModel = {
  metadata: {
    source: {}
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      order: orderModel,
      amount: 1,
      pair: {
        to: 'DAI',
        from: 'ETH'
      }
    }
  }
  componentDidMount(){
    // register dexag callback for status messages
    sdk.registerStatusHandler((status, data)=>{
    this.setState({web3Status: {status, data}})
    this.timeoutStatus(status)
      console.log(status)
    });
    // find the price for default pair
    this.findTrades()
  }
  findTrades = async() =>{
    let {amount, pair} = this.state;
    // reset order in UI
    this.setState({order: orderModel})
    // get the best price for the pair and amount
    let trade = await sdk.getTrade({to: pair.to, from: pair.from, amount: amount})
    this.setState({order: trade})
    console.log(trade)
  }
  changeAmount = (amount) => {
    // amount isnt a real number
    if(!(amount>0)) return;
    // update amount
    this.setState({amount: amount})
    // reset order in UI
    this.setState({order: orderModel})
    // wait for user to stop typing
    if(this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
      this.findTrades()
    }, 1000);
  }
  changeToken = (type, token) =>{
    var pair = this.state.pair;
    // reset order in UI
    this.setState({order: orderModel})
    // change the token pair
    pair[type] = token;
    this.setState({pair: pair},()=>{
      this.findTrades()
    })
  }
  trade = async() =>{
    let {order} = this.state;
    // start web3 validation process
    const valid = await sdk.validateWeb3(order);
    if (valid) {
      // web3 is valid, trade order
      sdk.tradeOrder({tx: order});
    }
  }
  closeStatus = () => {
    this.setState({web3Status: {}})
  }
  timeoutStatus = (status) => {
    // hide rejected message
    if(status=='rejected') setTimeout(()=>{this.closeStatus()},3500)
  }
  render() {
    let {source} = this.state.order.metadata;
    let {order, pair, web3Status, amount} = this.state;
    return (
      <div className="app">
        <div className="info">
          <img src="/logo.svg" />
          <h3>{'ETH <=> DAI'}</h3>
        </div>
        <div className="container">
          <div className="title">
            <p>Buy:</p> <Token type="to" pair={pair} findTrades={this.findTrades} changeToken={this.changeToken}/>
            <p>With:</p> <Token type="from" pair={pair} findTrades={this.findTrades} changeToken={this.changeToken}/>
          </div>
          <Amount changeAmount={this.changeAmount} pair={pair} />
          <Totals source={source} amount={amount} pair={pair} />
          <button onClick={()=>this.trade()} disabled={order==orderModel}>Buy</button>
          <Status web3Status={web3Status} closeStatus={this.closeStatus}/>
        </div>
        <a href="https://github.com/SettleFinance/DEXAG-Checkout" target="_blank" className="standalone-link">Fork me on Github</a>
      </div>
    );
  }
}

export default App;
