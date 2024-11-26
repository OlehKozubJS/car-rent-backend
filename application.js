console.log("Welcome to Node.js, folks!");

const users = require("./users");

const { admins, clients } = users;

console.log(admins);
console.log(clients);
console.table(users);
