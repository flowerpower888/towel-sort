
// You should implement your task here.

module.exports = towelSort = (matrix) => matrix && matrix.length ?
  matrix
        .map((x, i) => i % 2 == 0 ? x : x.reverse())
        .reduce((acc, cur) => acc.concat(cur), [])
  : []
