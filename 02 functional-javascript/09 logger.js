const slice = Array.prototype.slice

module.exports = logger = namespace => (
  function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
)
