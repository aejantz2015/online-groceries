const bcrypt = require('bcrypt');
const { User, Orders, Items, Department } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const cleanDB = require('./cleanDB');

mongoose.connect('mongodb://localhost:27017/grocery_store', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', async () => {
  try {
    // Department seeds. Needed? Can create JSON if required.
    await Department.create([
      { name: 'Produce' },
      { name: 'Dairy' },
      // Two examples for right now, more added as required.
    ]);

    // Grocery items using Items.js
    await Items.create([
      { name: 'Apple', description: 'Behold, the Topeka Apple - known far and wide as the crowned jewel of fruity delight!', price: 0.50, department: '<department_id>' },
      { name: 'Banana', description: 'eh... its okay. not the best... Whatever.', price: 10.0, department: '<department_id>' },
      // More items as needed. Not making a lot atm.
    ]);

    await User.create(profileSeeds);
    // I'm going to try to seed previous orders for specific users only if that user is signed in. For example, John Doe should only see John Doe's previous orders. John Doe should not see Jack Black's previous orders.
    if (seedPreviousOrders) {
      const users = await User.find();
      for (const user of users) {
        await Orders.create({
          total: 420.69, // example total
          purchaseDate: new Date('1969-04-20'), // immature
          user: user._id, // order associated with logged in user
          items: ['<item_id_1>', '<item_id_2>', '<item_id_3>']
        });
      }
    }
    console.log('Seeded Database Successfully. SICK!');
  } catch (err) {
    console.error(err);
  } finally {
    db.close();
  }
});