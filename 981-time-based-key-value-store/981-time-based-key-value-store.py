from bisect import bisect
from functools import cache


class TimeMap:

    def __init__(self):
        self.values: dict[str, list[str]] = {}
        self.stamps: dict[str, list[int]] = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        if key not in self.values:
            self.values[key] = []
            self.stamps[key] = []
        self.values[key].append(value)
        self.stamps[key].append(timestamp)

    def get(self, key: str, timestamp: int) -> str:
        if key not in self.values:
            return ""
        time = bisect(self.stamps[key], timestamp)
        return self.values[key][time - 1] if time else ""


# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)