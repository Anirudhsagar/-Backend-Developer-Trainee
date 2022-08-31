const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length !== 0) {
      let savedData = await userModel.create(data);
      res.status(201).send({ msg: savedData });               // A 201 status code indicates that a request was successful and as a result
    } else {
      res.status(400).send({ msg: "Body cannot be empty" });   // 400 indicates that the server did not understand the request due to bad syntax.
    }
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: err.message });       //  500 that the server encountered something it didn't expect and was unable to complete the request.
  }
};

const loginUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length === 0) {
      return res.status(400).send({ msg: "Body cannot be empty" });
    }   // 400 indicates that the server did not understand the request due to bad syntax.
    let userName = data.emailId;
    let password = data.password;

    let user = await userModel.findOne({
      emailId: userName,
      password: password,
    });
    if (!user)
      return res.status(404).send({       // 404 status code indicates that the requested resource was not found at the URL given, and the server has no idea how long for
        status: false,
        msg: "E-mailiId or password is not corerct",
      });

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "radon",
        organisation: "FunctionUp",
      },
      "functionup-radon"
    );
    res.setHeader("x-auth-token", token);
    res.status(201).send({ status: true, token: token });     // A 201 status code indicates that a request was successful and as a result
  } catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message });
  }
};

const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res
        .status(404)
        .send({ status: false, msg: "No such user exists" });

    res.send({ status: true, data: userDetails });
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: err.message });
  }
};


const updateUser = async function (req, res) {
  try{
    if (!req.params.userId) res.status(400).send({ msg: "Enter USerId" });
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(404).send("No such user exists");
  }

  let userData = req.body;
  let UpdatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new:true});
  res.send({ status: true, msg: UpdatedUser });
}
catch(err){res.status(500).send({msg:err.message})}};



const deleteUser = async function (req, res) {
  try {
    if (!req.params.userId) res.status(400).send({ msg: "Enter UserId" });
    let userId = req.params.userId;
    let user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).send("No such user exists");
    }
    let updatedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      { isDeleted: true },
      { new: true }
    );
    res.status(201).send({ status: true, data: updatedUser });
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: err.message });
  }
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
