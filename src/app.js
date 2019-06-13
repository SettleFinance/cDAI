import React, { Component } from 'react';
import {DEXAG} from 'dexag-sdk'

// Components
import Totals from './components/totals'
import Status from './components/status'
import Payment from './components/payment'
import Info from './components/info'
import Footer from './components/footer'
import Button from './components/button'
import Utility from './utility'

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
      input: {
        top: 1,
        bottom: 1
      },
      pair: {
        to: 'CDAI',
        from: 'DAI'
      },
      type: 'buy',
      purchase_type: false
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
  findTrades = async(purchase_type) =>{
    let {input, pair, type} = this.state;
    // reset order in UI
    this.setState({order: orderModel})
    // get the best price for the pair and amount
    let trade = await sdk.getTrade({to: type=='buy' ? pair.to:pair.from, from: type=='buy' ? pair.from:pair.to, amount: input['top']})
    this.setState({order: trade, purchase_type}, ()=>this.setInputs())
    console.log(trade)
  }
  changeAmount = (amount, type) => {
    // amount isnt a real number
    if(!(amount>0)) return;
    // update amount
    console.log('type', type)
    let {input} = this.state;
    input[type?'bottom':'top'] = amount;
    this.setState({input})
    // reset order in UI
    this.setState({order: orderModel})
    Utility.debounce(this.findTrades, type)
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
    if(status=='rejected') setTimeout(()=>{this.closeStatus()}, 3500)
  }
  changeType = async (type) => {
    var prev_type = this.state.type;
    this.setState({type}, ()=>{
      if(prev_type != type) this.findTrades()
    })
  }
  setInputs = () =>{
    let {input, pair, type, purchase_type, order} = this.state;
    let {source} = order.metadata;
    if(purchase_type || purchase_type==undefined){
      input['top'] = Utility.formatPrice(type=='buy' ? source.price*input['bottom'] : input['bottom']/source.price)
    }else if(!purchase_type){
      input['bottom'] = Utility.formatPrice(type=='buy' ? input['top']/source.price : source.price*input['top'])
    }
    this.setState({input})
  }
  render() {
    let {source} = this.state.order.metadata;
    let {order, pair, web3Status, input, type} = this.state;
    return (
      <div className="app">
        <Info />

        <div className="container">
          <Payment
          pair={pair}
          changeAmount={this.changeAmount}
          findTrades={this.findTrades}
          changeToken={this.changeToken}
          changeType={this.changeType}
          type={type}
          input={input} />

          <Totals source={source} pair={pair} />

          <Button
          order={order}
          orderModel={orderModel}
          trade={this.trade}
          input={input}
          source={source}
          pair={pair}
          type={type} />

          <Status web3Status={web3Status} closeStatus={this.closeStatus}/>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
