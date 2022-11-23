

function verify(password) {
   var upperCaseCkeck = new RegExp("!/[A-Z]/g");
   var NumberCkeck = new RegExp("!/[A-Z]/g");


  if (password.length < 8) {
    return "password rejected";
  } else if (password === null) {
    return "password rejected";
  } else if (upperCaseCkeck.test(password)) {
    return "password rejected";
  } else if (NumberCkeck.test(password)) {
    return "password rejected";
  } else return "Password Accepted";

  
}

module.exports = verify;