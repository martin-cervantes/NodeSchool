module.exports = countWords = (inputWords) => (
  inputWords.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = ++accumulator[currentValue] || 1

    return accumulator
  },{})
)
