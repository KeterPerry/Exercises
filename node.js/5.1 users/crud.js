var uniqid = require("uniqid");
const fs = require("fs");

///////////////////////////////////////////////////////create

const addUser = (name, email) => {
  const users = loadUsers();
  const newUser = {
    id: uniqid(),
    name: name,
    email: email,
  };
  console.log(newUser);
  users.push(newUser);
  saveUsersASJSON(users);
};

const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON); //returns an array with one object in js (not json)this case
  } catch (err) {
    return [];
  }
};

const saveUsersASJSON = (users) => {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJSON);
};
//////////////////////////////////////////////////////////////////delete!!!
const deleteUser = (id) => {
  console.log("bla");
  const users = loadUsers();
  console.log(users);
  const filteredAfterDelete = users.filter((user) => user.id !== id);
  console.log(filteredAfterDelete);
  saveUsersASJSON(filteredAfterDelete);
};

///////////////////////////////////////////////////////read!!!
const getUsers = () => {
  const read = loadUsers();
  console.log(read);
};
///////////////////////////////////////////////////////update!!!

const updateUser = (id, name, email) => {
  const users = loadUsers();
  const objToUpdateIndex = users.findIndex((user) => user.id === id); ///findindex
  if (objToUpdateIndex !== -1) {
    const updatedUser = { ...users[objToUpdateIndex], name, email };
    saveUsersASJSON(updatedUser);
  } else {
    console.log("No user was found");
  }
};

module.exports = { addUser, deleteUser, getUsers, updateUser };

// const updateUser = (id, name, email) => {
//   const users = loadUsers();
//   const userIndex = users.findIndex((user) => user.id === id);
//   if (userIndex !== -1) {
//     const updatedUser = { ...users[userIndex], name, email };
//     users[userIndex] = updatedUser;
//     save(users);
//   } else {
//     console.log('No user with that specific id');
//   }
// };
