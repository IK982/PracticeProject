var adminUser = (req, res, next) => {
    if (req.user && req.user.role == 'admin') {
        next();
        return;
    }
    res.redirect('/error');
}


var readAccess = (req, res, next) => {
    if (req.user && req.user.role == 'read') {
        next();
        return;
    }
    res.redirect('/error');
}


var restrictedReadAccess = (req, res, next) => {
    if (req.user && req.user.role == 'restricted-read') {
        res.redirect('/error');
        return;
    }
    next();
}



module.exports.adminUser = adminUser;
module.exports.readAccess = readAccess;
module.exports.restrictedReadAccess = restrictedReadAccess;
