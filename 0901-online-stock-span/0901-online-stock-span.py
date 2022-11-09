class SpannerNode:
    
    def __init__(self, price: int = 0):
        self.price = price
        self.span = 1


class StockSpanner:

    def __init__(self):
        # self.spans: List[Tuple[int, int]] = []
        self.spans: List[SpannerNode] = []

    def next(self, price: int) -> int:
        quote = SpannerNode(price)
        
        while self.spans and price >= self.spans[-1].price:
            quote.span += self.spans.pop().span
        
        self.spans.append(quote)
        
        return quote.span


# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)