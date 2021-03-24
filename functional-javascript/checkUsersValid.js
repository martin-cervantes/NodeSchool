module.exports = checkUsersValid = goodUsers => (
  allUsersValid = submittedUsers => (submittedUsers.every(sU => goodUsers.some(gU => gU.id === sU.id)))
)
