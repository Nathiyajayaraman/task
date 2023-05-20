const jwt = require("jsonwebtoken");
const Users = require("../models/users");

var auth = async function (req, res, next) {
    try {
        var token = req.header("Authorization").replace("Bearer ", "");
        var decode = jwt.verify(token, process.env.SECRET_KEY);
        var user = await Users.find({
            _id: decode._id,
            token
        });

        if (!user) {
            res.status(403).send("unauthicated");
            return;
        }
        next();
    } catch (e) {
        res.status(403).send("unauthicated");
    }

}

module.exports = auth;