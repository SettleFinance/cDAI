## Documentation
See the [DEXAG Docs](https://docs.dex.ag)  
View the app running live [cDAI.io](https://cdai.io)

## Installation
Install the packages with:
```
npm install 
``` 

## Start the app
```
npm run start
```

## Main SDK Usage
The DEXAG SDK is used to get the best price for a given trading pair and amount. Using validateWeb3, the client wraps ETH, sets token allowances, or whatever other steps are required to checkout. The tradeOrder function is used to execute the trade and request the client to confirm their transaction.
```
import {DEXAG} from 'dexag-sdk'
const sdk = new DEXAG();

// receive status messages as the client executes the trade
sdk.registerStatusHandler((status, data)=>{
  console.log(status, data)
});

// get trade
const trade = await sdk.getTrade({to: 'DAI', from: 'ETH', amount: 1})

// checkout
const valid = await sdk.validateWeb3(trade);
if (valid) {
  // web3 is valid, trade order
  sdk.tradeOrder({tx: trade}); /** Metamask opens **/
}
```

## More information
Find more information about how to build DEX trading into your platform on the [DEXAG Docs](https://docs.dex.ag)
