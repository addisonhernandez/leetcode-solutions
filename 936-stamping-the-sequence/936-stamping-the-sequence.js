/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function(stamp, target) {
    const s = stamp.length;
    const t = target.length;
    
    if (
        stamp[0] !== target[0] ||
        stamp[s - 1] !== target[t - 1]
    ) {
        return [];
    }
    
    const res = [];
    
    const doTheThing = (i) => {
        let changed = false;
        
        for (let j = 0; j < s; j++) {
            if (target[i + j] === '?') {
                continue;
            }
            if (target[i + j] !== stamp[j]) {
                return false;
            }
            changed = true;
        }
        
        if (changed) {
            target = target.slice(0, i) + '?'.repeat(s) + target.slice(i + s);
            res.push(i);
        }
        
        return changed;
    };
    
    let changed = true;
    
    while (changed) {
        changed = false;
        for (let i = 0; i < t - s + 1; i++) {
            changed ||= doTheThing(i);
        }
    }
    
    return /[a-z]/.test(target)
        ? []
        : res.reverse();
};