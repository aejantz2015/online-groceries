const bcrypt = require("bcrypt");
const { User, Orders, Items, Department } = require("../models");
const profileSeeds = require("./profileSeeds.json");
const cleanDB = require("./cleanDB");
const db = require("../config/connection");

db.once("open", async () => {
  try {
    await cleanDB("User", "users");
    await cleanDB("Department", "department");
    await cleanDB("Items", "items");
    await cleanDB("Orders", "orders");

    // Department seeds. Needed? Can create JSON if required.
    const department = await Department.insertMany([
      { name: "produce" },
      { name: "dairy" },
      { name: "beverages" },
      { name: "meat" },
      { name: "pantry" },
      { name: "frozen" },
      { name: "snacks" },

      // Two examples for right now, more added as required.
    ]);

    console.log("departments have been seeded");

    // Grocery items using Items.js
    const items = await Items.insertMany([
      {
        name: "Coke",
        description: "12 pack",
        image: "coke.png",
        price: 4.99,
        quantity: 1,
        department: department[2]._id,
      },
      {
        name: "Simply Lemonade",
        description: "52 oz.",
        image: "lemonade.png",
        price: 3.47,
        quantity: 1,
        department: department[2]._id,
      },
      {
        name: "Tropicana Orange Juice",
        description: "85 ounce",
        image: "orangejuice.png",
        price: 7.28,
        quantity: 1,
        department: department[2]._id,
      },
      {
        name: "Pure Life Water",
        description: "35 pack",
        image: "packofwater.png",
        price: 3.78,
        quantity: 1,
        department: department[2]._id,
      },
      {
        name: "Red Diamond Sweet Tea",
        description: "1 gallon",
        image: "sweettea.png",
        price: 2.25,
        quantity: 1,
        department: department[2]._id,
      },
      {
        name: "Large Eggs",
        description: "dozen",
        image: "eggs.png",
        price: 2.52,
        quantity: 1,
        department: department[1]._id,
      },
      {
        name: "Tyson Fun Nuggets",
        description: "29 oz",
        image: "chickennuggets.png",
        price: 8.97,
        quantity: 1,
        department: department[5]._id,
      },
      {
        name: "5 Cheese Texas Toast",
        description: "8 slices",
        image: "garlicbread.png",
        price: 4.24,
        quantity: 1,
        department: department[5]._id,
      },
      {
        name: "Blue Bunny Super Fudge Brownie",
        description: "46 fl oz",
        image: "icecream.png",
        price: 5.13,
        quantity: 1,
        department: department[5]._id,
      },
      {
        name: "Red Baron Supreme Pizza",
        description: "Classic Crust",
        image: "pizza.png",
        price: 6.81,
        quantity: 1,
        department: department[5]._id,
      },
      {
        name: "Ore-Ida Crispy Crowns",
        description: "30 oz",
        image: "potatoes.png",
        price: 6.42,
        quantity: 1,
        department: department[5]._id,
      },
      {
        name: "Farmland Classic Cut Bacon",
        description: "16 oz",
        image: "bacon.png",
        price: 5.77,
        quantity: 1,
        department: department[3]._id,
      },
      {
        name: "Boneless Skinless Chicken",
        description: "2.25 lbs",
        image: "chicken.png",
        price: 9.82,
        quantity: 1,
        department: department[3]._id,
      },
      {
        name: "93% Lean Ground Beef",
        description: "16 oz",
        image: "groundbeef.png",
        price: 3.33,
        quantity: 1,
        department: department[3]._id,
      },
      {
        name: "Alaska Sockeye Salmon",
        description: "1 lb",
        image: "salmon.png",
        price: 7.14,
        quantity: 1,
        department: department[3]._id,
      },
      {
        name: "Colossal Cooked Shrimp",
        description: "16 oz",
        image: "shrimp.png",
        price: 8.97,
        quantity: 1,
        department: department[3]._id,
      },
      {
        name: "GV Light Brown Sugar",
        description: "32 oz",
        image: "brownsugar.png",
        price: 1.88,
        quantity: 1,
        department: department[4]._id,
      },
      {
        name: "Chef Boyardee Mini Ravioli",
        description: "4 pack",
        image: "chefb.png",
        price: 6.21,
        quantity: 1,
        department: department[4]._id,
      },
      {
        name: "Ghirardelli Chocolate Chips",
        description: "11.5 oz",
        image: "chocochips.png",
        price: 5.92,
        quantity: 1,
        department: department[4]._id,
      },
      {
        name: "McCormick Garlic Powder",
        description: "8.75 oz",
        image: "garlicpowd.png",
        price: 7.14,
        quantity: 1,
        department: department[4]._id,
      },
      {
        name: "GV Petite Dice Tomatoes",
        description: "14.5 oz",
        image: "tomato.png",
        price: 1.28,
        quantity: 1,
        department: department[4]._id,
      },
      {
        name: "Jazz Apples",
        description: "3 lb",
        image: "apples.png",
        price: 5.25,
        quantity: 1,
        department: department[0]._id,
      },
      {
        name: "Bell Peppers",
        description: "3 pack",
        image: "bellpeps.png",
        price: 4.44,
        quantity: 1,
        department: department[0]._id,
      },
      {
        name: "Blackberries",
        description: "6 oz",
        image: "blackberries.png",
        price: 4.64,
        quantity: 1,
        department: department[0]._id,
      },
      {
        name: "Broccoli Crown",
        description: "5 oz",
        image: "broccoli.png",
        price: 1.49,
        quantity: 1,
        department: department[0]._id,
      },
      {
        name: "Strawberries",
        description: "1 lb",
        image: "strawberries.png",
        price: 4.88,
        quantity: 1,
        department: department[0]._id,
      },
      {
        name: "Cheez-It Snack Mix",
        description: "10.5 oz",
        image: "cheezit.png",
        price: 4.82,
        quantity: 1,
        department: department[6]._id,
      },
      {
        name: "Scooby-Doo Fruit Snacks",
        description: "22 pouches",
        image: "fruitsnack.png",
        price: 7.45,
        quantity: 1,
        department: department[6]._id,
      },
      {
        name: "Goldfish Xtra Cheddar",
        description: "6.6 oz",
        image: "goldfish.png",
        price: 3.74,
        quantity: 1,
        department: department[6]._id,
      },
      {
        name: "Double Stuf Oreos",
        description: "Family Size",
        image: "oreos.png",
        price: 5.55,
        quantity: 1,
        department: department[6]._id,
      },
      {
        name: "Teddy Grahams Cocoa",
        description: "10 oz",
        image: "teddygrahams.png",
        price: 6.32,
        quantity: 1,
        department: department[6]._id,
      },
    ]);
    // More items as needed. Not making a lot atm.
    console.log("items have been seeded");

    await User.create(profileSeeds);
    // I'm going to try to seed previous orders for specific users only if that user is signed in. For example, John Doe should only see John Doe's previous orders. John Doe should not see Jack Black's previous orders.

    console.log("Seeded Database Successfully. SICK!");
  } catch (err) {
    console.error(err);
  } finally {
    db.close();
  }
});
