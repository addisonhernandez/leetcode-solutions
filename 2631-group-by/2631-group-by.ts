declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }
}

Array.prototype.groupBy = function(fn) {
    const result = {};
    
    this.forEach((entry) => {
        const key = fn(entry);
        
        if (key in result) {
            result[key].push(entry);
        } else {
            result[key] = [entry]
        }
    });
    
    return result;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */