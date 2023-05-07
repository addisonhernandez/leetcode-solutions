/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
  for (const entry of arr) {
    if (Array.isArray(entry)) {
      yield* inorderTraversal(entry);
    } else {
      yield entry;
    }
  }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */