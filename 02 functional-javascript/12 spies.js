module.exports = Spy = (target, method) => {
  const originalFunction = target[method]

  const result = {
    count: 0
  }

  target[method] = function() {
    result.count++
    return originalFunction.apply(this, arguments)
  }

  return result
}
