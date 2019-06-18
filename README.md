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
Query DEXes for the best price and execute the trade with a web3 browser.
```
import {DEXAG} from 'dexag-sdk'
const sdk = DEXAG.fromProvider(window.ethereum)

// receive status messages as the client executes the trade
sdk.registerStatusHandler((status, data)=>{
  console.log(status, data)
});

// get trade
const trade = await sdk.getTrade({to: 'DAI', from: 'ETH', toAmount: 1})

// checkout
const valid = await sdk.validate(trade);
if (valid) {
  // web3 is valid, trade order
  sdk.trade({tx: trade}); /** Metamask opens **/
}
```

## More information
Find more information about how to build DEX trading into your platform on the [DEXAG Docs](https://docs.dex.ag)
