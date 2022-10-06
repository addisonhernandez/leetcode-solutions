type TimeMap struct {
	Entries map[string][]entry
}

type entry struct {
	timestamp int
	value     string
}

func Constructor() TimeMap {
	return TimeMap{
		Entries: make(map[string][]entry),
	}
}

func (this *TimeMap) Set(key string, value string, timestamp int) {
	this.Entries[key] = append(this.Entries[key], entry{timestamp: timestamp, value: value})
}

func (this *TimeMap) Get(key string, timestamp int) string {
	entries, exists := this.Entries[key]
	if !exists {
		return ""
	}

	lo, hi := 0, len(entries) - 1

	for lo <= hi {
		mid := (lo + hi) >> 1

		if timestamp < entries[mid].timestamp {
			hi = mid - 1
		} else {
			lo = mid + 1
		}
	}

	if hi == -1 {
		return ""
	}
	return entries[hi].value
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Set(key,value,timestamp);
 * param_2 := obj.Get(key,timestamp);
 */
