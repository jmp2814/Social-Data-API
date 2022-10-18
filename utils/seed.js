const connection = require("../config/connection");
const { User } = require("../models");

const { getRandomUser, userDate, userData } = require("./data");

connection.once("open", async () => {
  await User.deleteMany({});

  const users = [];

  for (let i = 0; i < 5; i++) {
    users.push(userData);
  }

  console.log(users);

  await User.collection.insertMany(users);

  process.exit(0);
});
