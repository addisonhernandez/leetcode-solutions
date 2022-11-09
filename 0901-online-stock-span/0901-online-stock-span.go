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
    
    for len(this.Quotes) > 0 && price >= this.Quotes[len(this.Quotes) - 1].Price {
        span += this.Quotes[len(this.Quotes) - 1].Span
        this.Quotes = this.Quotes[: len(this.Quotes) - 1]
    }
    
    this.Quotes = append(this.Quotes, Quote{Price: price, Span: span})
    
    return span
}


/**
 * Your StockSpanner object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Next(price);
 */
