const jwt = require("jsonwebtoken");

const authentication = async function (req, res, next) {
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    //If no token is present in the request header return error
    if (!token)
      return res
        .status(400)        // // 400 indicates that the server did not understand the request due to bad syntax.
        .send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)
      return res.status(401).send({ status: false, msg: "Token is invalid" });
    else {
      next();
    }
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: err.message });
  }    //  500 that the server encountered something it didn't expect and was unable to complete the request.
};
const authorization = async function (req, res, next) {
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    let decodedToken = jwt.verify(token, "functionup-radon");
    if (decodedToken.userId !== req.params.userId) {
      return res
        .status(403)      // A 403 status code indicates that the client cannot access the requested resource. 
        .send({ status: false, msg: "UserId or Token is Wrong" });
    } else {
      next();
    }
  } catch (err) {
    console.log(err)
    res.status(500).res.send({ error: err.message });
  }   //     //  500 that the server encountered something it didn't expect and was unable to complete the request.
};

module.exports.authentication = authentication;
module.exports.authorization = authorization;
