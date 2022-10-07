from sortedcontainers import SortedDict
from itertools import accumulate


class MyCalendarThree:

    def __init__(self):
        self.bookings: dict[int, int] = SortedDict(int)

    def book(self, start: int, end: int) -> int:
        self.bookings[start] = self.bookings.get(start, 0) + 1
        self.bookings[end] = self.bookings.get(end, 0) - 1
        
        return max(accumulate(self.bookings.values()))


# Your MyCalendarThree object will be instantiated and called as such:
# obj = MyCalendarThree()
# param_1 = obj.book(start,end)
