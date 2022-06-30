const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/products-api", {});

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: { type: String, required: true, maxLength: 10 },
    price: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) {
          throw new Error("Price must be a positive number");
        }
      },
    },
    discount: { type: Number, default: 0 },
  },
});

const pizza = new Product({
  name: "pizza",
  category: "food",
  isActive: true,
  details: { description: "Italian", price: 50, discount: 20 },
});
const hamburger = new Product({
  name: "hamburger",
  category: "food",
  isActive: true,
  details: { description: " American", price: 40 },
});
const sushi = new Product({
  name: "sushi",
  category: "food",
  isActive: true,
  details: { description: " Asian", price: 32, discount: 10 },
});

pizza
  .save()
  .then(() => {
    console.log(pizza);
  })
  .catch((error) => {
    console.log(error);
  });
hamburger
  .save()
  .then(() => {
    console.log(hamburger);
  })
  .catch((error) => {
    console.log(error);
  });
sushi
  .save()
  .then(() => {
    console.log(sushi);
  })
  .catch((error) => {
    console.log(error);
  });
