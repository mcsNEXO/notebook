module.exports = function (req, res, next) {
    res.local.errors = null;
    req.locals.form = {}
    next()
}