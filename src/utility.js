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
  }
}
export default Utility;
