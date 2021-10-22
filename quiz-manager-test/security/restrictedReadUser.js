var restrictedReadAccess = (req, res, next) => {
    if (req.user && req.user.role == 'restricted-read') {
        res.send('unauthorised');
        return;
    }
    next();
}

module.exports.restrictedReadAccess = restrictedReadAccess;