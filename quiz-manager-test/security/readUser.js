var readAccess = (req, res, next) => {
    if (req.user && req.user.role == 'read') {
        next();
        return;
    }
    res.redirect('/error');
}

module.exports.readAccess = readAccess;