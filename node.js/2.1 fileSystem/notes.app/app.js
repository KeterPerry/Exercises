// console.log("hello");
const getNotes = require("./notes.js");
const msg = getNotes();
console.log(msg);
const fs = require("fs");
const fsPromises = require("fs").promises;
fs.writeFileSync("notes.txt", "My name is keter");

//better way (callBack -error handling)
fs.writeFile("notes.txt", "My name is keter", (err) => {
  if (err) {
    console.log("Error Found", err);
  }
});

fs.copyFile("notes.txt", "notes1.txt", (err) => {
  if (err) {
    console.log("Error Found", err);
  }
});

fs.rename("notes.txt", "notesRenamed.txt", () => {
  console.log("\nFile Renamed!\n");
});

const files = fs.readdirSync(__dirname);
console.log(files);

// getCurrentFilenames();
// function getCurrentFilenames() {
//   fs.readdirSync(__dirname).forEach((file) => {
//     ///dirname gives you the path wr r on
//     console.log(file);
//   });
// }

fs.promises
  .readFile("notesRenamed.txt")
  .then(function (result) {
    console.log("" + result);
  })
  .catch(function (error) {
    console.log(error);
  });
