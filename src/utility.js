var Utility = {
  formatPrice: (price) => {
    // handle large and small values
    return price>1?price.toFixed(2):price.toPrecision(3)
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
