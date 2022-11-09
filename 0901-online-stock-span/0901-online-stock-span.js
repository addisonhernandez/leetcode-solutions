
var StockSpanner = function() {
    this.spans = [/* { price: number, span: number } */];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    span = 1;
    
    while (this.spans.length && price >= this.spans[this.spans.length - 1].price) {
        span += this.spans.pop().span;
    }
    
    this.spans.push({ price, span })
    
    return span;
};
