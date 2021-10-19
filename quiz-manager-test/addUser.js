var userService = require("./services/usersService");
var db = require('./db');
require("dotenv").config()

my_test_user = {
    username: "read_user",
    password: "read123"
};

onSuccess = () => {};
userService.createUser(my_test_user, onSuccess);
db.end();