var userService = require("./services/usersService");
var db = require('./db');
require("dotenv").config()

my_test_user = {
    username: "read_user",
    password: "read123"
};

onSuccess = () => {
    const token = jwt.sign({
        user: {
          username: user.username
        }
      },
      // Your secret, e.g. here set by environment variable
      process.env.AUTH_SECRET);

      res.cookie('token', token);

};
userService.createUser(my_test_user, onSuccess);
db.end();