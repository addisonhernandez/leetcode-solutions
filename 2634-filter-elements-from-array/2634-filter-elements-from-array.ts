function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    const result = [];
    
    arr.forEach((n, i) => {
        if (fn(n, i)) {
            result.push(n);
        }
    });
    
    return result;
};