function curry(fn: Function): Function {
    return function curried(...args) {
        if (fn.length === args.length) {
            return fn(...args);
        }
        
        return function(...nextArgs) {
            return curried(...args, ...nextArgs);
        }
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
