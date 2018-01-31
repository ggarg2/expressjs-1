const userInfoHandler = (req, res, next) => {
    console.log("User Info Handler")
    req.userId = "12345";
    next();
}

module.exports = userInfoHandler;
