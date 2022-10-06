
var TimeMap = function() {
    this._values = {};
    this._stamps = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this._values.hasOwnProperty(key)) {
        this._values[key] = [];
        this._stamps[key] = [];
    }
    this._values[key].push(value);
    this._stamps[key].push(timestamp);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this._values.hasOwnProperty(key)) {
        return '';
    }
    
    const times = this._stamps[key];
    
    let lo = 0;
    let hi = times.length - 1;
    
    while (lo <= hi) {
        const mid = (lo + hi) >> 1; // integer divide by 2
        
        if (timestamp < times[mid]) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    
    return (hi === -1) ? '' : this._values[key][hi];
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */