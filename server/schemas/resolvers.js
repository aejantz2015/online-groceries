const { User, Orders, Items, Department } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    departments: async () => {
      return await Department.find();
    },
    items: async (parent, { department, name }) => {
      const params = {};

      if (department) {
        params.department = department;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Items.find(params).populate("department");
    },
    items: async (parent, { _id }) => {
      return await Items.findById(_id).populate("department");
    },
    user: async (parents, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.items",
          populate: "department",
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }
      throw AuthenticationError;
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.items",
          populate: "department",
        });

        return user.orders.id(_id);
      }
      throw AuthenticationError;
    },
    cart: async (parent, args, context) => {
      const URL = new URL(context.headers.referer).origin;
      const order = new Orders({ items: args.items });
      const cart_items = [];

      const { items } = await order.populate("items");

      for (let i = 0; i < items.length; i++) {
        const item = await stripe.products.create({
          name: items[i].name,
          description: items[i].description,
          images: [`${url}/images/${items[i].image}`],
        });

        const price = await stripe.prices.create({
          item: item.id,
          cost: products[i].price * 100,
          currency: "usd",
        });

        cart_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.cart.session.create({
        paymentMethod: ["card"],
        cart_items,
        mode: "payment",
      });

      return { session: session.id };
    },
  },

  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    createOrder: async (parent, args) => {
      if (context.user) {
        const order = new Orders({ items });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }
      throw new AuthenticationError("You are not logged in.");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("You are not logged in.");
    },
    updateItems: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Items.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found.");
      }

      const rightPW = await user.isRightPassword(password);

      if (!rightPW) {
        throw new AuthenticationError("Incorrect password");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
