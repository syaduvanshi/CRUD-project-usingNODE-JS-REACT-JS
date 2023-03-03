const { v4: uuidv4 } = require("uuid");

let users = [];

exports.getuser = (req, res) => {
  res.send(users);
};

exports.createuser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });
  res.send("added successfully");
};

exports.getusers = (req, res) => {
  const singleuser = users.filter((user) => user.id == req.params.id);

  console.log("hgfvj", singleuser);
  res.send(singleuser);
};

exports.deleteUser = (req, res) => {
  users = users.filter((user) => user.id != req.params.id);
  res.send("User deleted");
};

exports.userUpdate = (req, res) => {
  const update = users.find((user) => user.id == req.params.id);
  update.Name = req.body.Name;
  update.Email = req.body.Email;
  update.Contact = req.body.Contact;

  res.send("updated");
};
