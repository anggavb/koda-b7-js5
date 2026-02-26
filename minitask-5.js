const account = {
  id: 1,
  username: 'anggavb',
  password: 'secret'
}

let newPassword = 'supersecret'

function changePassword(account, newPassword) {
  let newAccount = { ...account, password: newPassword }
  return newAccount
}

let updateAccount = changePassword(account, newPassword)
console.log('Account before update:', account);
console.log('Account after update:', updateAccount);