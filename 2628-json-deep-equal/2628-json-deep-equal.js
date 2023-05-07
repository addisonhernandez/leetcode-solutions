/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
    return (
        o1 === o2 ||
        isObject(o1) &&
        Array.isArray(o1) === Array.isArray(o2) &&
        Object.keys(o1).length === Object.keys(o2).length &&
        Object.keys(o1).every((key) => areDeeplyEqual(o1[key], o2[key]))
    );
};

const isObject = function (obj) {
    return typeof obj === 'object' && obj !== null;
}