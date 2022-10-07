
var MyCalendarThree = function() {
    this._treemap = {}
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    this._treemap[start] = (this._treemap[start] || 0) + 1
    this._treemap[end] = (this._treemap[end] || 0) - 1
    
    let sweepcount = 0
    let max = 0
    
    for (const count of Object.values(this._treemap)) {
        sweepcount += count
        if (sweepcount > max) {
            max = sweepcount
        }
    }
    return max
};

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
