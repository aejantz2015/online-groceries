const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { User, Orders, Items, Department } = require("../models");
const profileSeeds = require("./profileSeeds.json");
const cleanDB = require("./cleanDB");
// const db = require("../config/connection");
// mongoose.connect("mongodb://localhost:27017/grocery_store", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const db = mongoose.connection;

cleanDB("users");
cleanDB("departments");
cleanDB("items");
cleanDB("orders");

db.once("open", async () => {
  try {
    // Department seeds. Needed? Can create JSON if required.
    const departments = await Department.insertMany([
      { name: "Produce" },
      { name: "Dairy" },
      // Two examples for right now, more added as required.
    ]);

    // Grocery items using Items.js
    await Items.insertMany([
      {
        name: "Apple",
        description:
          "Behold, the Topeka Apple - known far and wide as the crowned jewel of fruity delight!",
        price: 0.5,
        department:
          departments[Math.floor(Math.random() * departments.length)]._id,
      },
      {
        name: "Banana",
        description: "eh... its okay. not the best... Whatever.",
        price: 10.0,
        department:
          departments[Math.floor(Math.random() * departments.length)]._id,
      },
      // More items as needed. Not making a lot atm.
    ]);

    await User.insertMany(profileSeeds);
    // I'm going to try to seed previous orders for specific users only if that user is signed in. For example, John Doe should only see John Doe's previous orders. John Doe should not see Jack Black's previous orders.

    console.log("Seeded Database Successfully. SICK!");
  } catch (err) {
    console.error(err);
  } finally {
    db.close();
  }
});
