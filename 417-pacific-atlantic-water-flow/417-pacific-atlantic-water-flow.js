const offsets = [
  [-1, 0], // up
  [1, 0], // down
  [0, -1], // left
  [0, 1], // right
];

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const m = heights.length;
  const n = heights[0].length;

  const isValid = (r, c) => 0 <= r && 0 <= c && r < m && c < n;

  const peaks = Array(m)
    .fill(null)
    .map(() => Array(n).fill(0));

  const res = [];

  const findPeak = (r, c, ocean, prevHeight) => {
    if (
      !isValid(r, c) ||
      peaks[r][c] === ocean ||
      peaks[r][c] === 3 ||
      heights[r][c] < prevHeight
    ) {
      return;
    }

    peaks[r][c] += ocean;
    if (peaks[r][c] === 3) {
      res.push([r, c]);
    }

    for (const [dr, dc] of offsets) {
      findPeak(r + dr, c + dc, ocean, heights[r][c]);
    }
  };

  const pacific = 1;
  const atlantic = 2;

  for (let r = 0; r < m; r++) {
    findPeak(r, 0, pacific, heights[r][0]);
    findPeak(r, n - 1, atlantic, heights[r][n - 1]);
  }
  for (let c = 0; c < n; c++) {
    findPeak(0, c, pacific, heights[0][c]);
    findPeak(m - 1, c, atlantic, heights[m - 1][c]);
  }

  return res;
};
