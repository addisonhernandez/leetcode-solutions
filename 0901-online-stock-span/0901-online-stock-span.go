type Quote struct {
    Price int
    Span  int
}
type StockSpanner struct {
    Quotes []Quote
}


func Constructor() StockSpanner {
    return StockSpanner{make([]Quote, 0)}
}


func (this *StockSpanner) Next(price int) int {
    span := 1
    
    for n := len(this.Quotes) - 1; n >= 0 && price >= this.Quotes[n].Price; n-- {
        span += this.Quotes[n].Span
        this.Quotes = this.Quotes[:n]
    }
    
    this.Quotes = append(this.Quotes, Quote{Price: price, Span: span})
    
    return span
}


/**
 * Your StockSpanner object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Next(price);
 */
