var adminUser = (req, res, next) => {
    if (req.user && req.user.role == 'admin') {
        next();
        return;
    }
    res.redirect('/error');
}

module.exports.adminUser = adminUser;