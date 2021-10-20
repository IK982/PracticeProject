var restrictedReadAccess = (req, res, next) => {
    if (req.user && req.user.role == 'restricted-read') {
        res.redirect('/error');
        return;
    }
    next();
}

module.exports.restrictedReadAccess = restrictedReadAccess;