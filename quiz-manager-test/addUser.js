var userService = require("./services/usersService");
var db = require('./db');
require("dotenv").config()

// my_test_user = {
//     username: "read_user",
//     password: "read123"
// };

admin_access_user = {
    username: "admin_user",
    password: "admin123",
    role: "admin"

};

read_access_user = {
    username: "read_user",
    password: "read123",
    role: "read"
};

restricted_read_user = {
    username: "restricted_user",
    password: "restricted123",
    role: "restricted-read"
};

onSuccess = () => {};
// userService.createUser(my_test_user, onSuccess);
userService.createUser(admin_access_user, onSuccess);
userService.createUser(read_access_user, onSuccess);
userService.createUser(restricted_read_user, onSuccess);
db.end();