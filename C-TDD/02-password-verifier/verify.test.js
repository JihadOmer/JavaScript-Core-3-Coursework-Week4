
let getPasswordVerfication = require("./verify");

test("password verfied ", () => {

    let password = 'Johndue0'

let getPassword = getPasswordVerfication(password);

expect(getPassword).toBe('Password Accepted');



});
