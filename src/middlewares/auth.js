const jwt = require("jsonwebtoken");

const validateToken = async function (req, res,next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    console.log(token);
    
    // If a token is present then decode the token with verify function
    // verify takes two inputs:
    // Input 1 is the token to be decoded
    // Input 2 is the same secret with which the token was generated
    // Check the value of the decoded token yourself
    let decodedToken = jwt.verify(token, "functionup-Plutonium");
    if (!decodedToken){
      return res.send({ status: false, msg: "Token is invalid" });
    }
    let userId= req.params.userId
    if(decodedToken.userId!==userId) return res.send({status: false, msg:"user id is wrong"})
    else
    req.loggedInUser = decodedToken.uerId
    next()
}


const checkIfAuthorized = function(req, res, next) {
  let requestedUserId = req.params.userId 
  if(requestedUserId !== req.loggedInUser) {
    return res .send( {status: false, msg: "Permission denied"})
  }
  next()
}

module.exports.validateToken = validateToken;
module.exports.checkIfAuthorized = checkIfAuthorized