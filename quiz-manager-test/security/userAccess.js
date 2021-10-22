var restrictedReadAccess = (req, res, next) => {
    if (req.user && req.user.role == 'restricted-read') {
        next();
        return;
    }
    res.redirect('/error');
}

var readAccess = (req, res, next) => {
    if (req.user && (req.user.role == 'read' || req.user.role == 'admin')) {
        next();
        return;
    }
    res.redirect('/error');
}



var adminUser = (req, res, next) => {
    if (req.user && req.user.role == 'admin') {
        next();
        return;
    }
    res.redirect('/error');
}


module.exports.adminUser = adminUser;
module.exports.readAccess = readAccess;
module.exports.restrictedReadAccess = restrictedReadAccess;
