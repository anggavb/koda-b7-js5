const account = {
  id: 1,
  username: 'anggavb',
  password: 'secret'
}

let newPassword = 'supersecret'
if (newPassword.length < 5) {
  console.log("Password must be at least 5 characters long");
} else {
  let newAccount = { ...account, password: newPassword }

  console.log('Account before update:', account);
  console.log('Account after update:', newAccount);
}