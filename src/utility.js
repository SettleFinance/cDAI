var Utility = {
  formatPrice: (price) => {
    // handle large and small values
    price = parseFloat(price)
    if(Number.isInteger(price)) return price;
    return price>1?price.toFixed(2):price.toPrecision(4)
  },
  cleanDex: (dex) => {
    // format text in UI
    if(dex!=undefined) return dex.replace(/-/g,' ').toLowerCase()
    return dex
  },
  debounce: (func, args) => {
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(function() {
      func(args)
      this.timer = null;
    }.bind(this), 750);
  },
  inputAmount: ({type, request, purchase_type, input}) => {
    if(purchase_type){ // bottom
       request[type=='buy'?'toAmount':'fromAmount'] = input['bottom']
    }else if(!purchase_type){ // top
       request[type=='buy'?'fromAmount':'toAmount'] = input['top']
    }
    return request
  },
  inputPrice: ({purchase_type, type, source, input}) => {
    if(purchase_type){
      input['top'] = Utility.formatPrice(input['bottom']*source.price)
    }else if(!purchase_type){
      input['bottom'] = Utility.formatPrice(input['top']*source.price)
    }
    return input;
  }
}
export default Utility;
