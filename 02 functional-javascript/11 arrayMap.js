module.exports = arrayMap = (arr, fn, thisArg) => (
  arr.reduce(function(acc, item, index, arr) {
    acc.push(fn.call(thisArg, item, index, arr))
    return acc
  }, [])
)
