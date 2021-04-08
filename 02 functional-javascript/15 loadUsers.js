module.exports = loadUsers = (userIds, load, done) => {
  let completed = 0
  const users = []
  userIds.forEach(function(id, index) {
    load(id, function(user) {
      users[index] = user
      if (++completed === userIds.length) return done(users)
    })
  })
}
