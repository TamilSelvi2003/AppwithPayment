require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const app = express();

app.use(express.json());
app.use(cors());

let products = [
  // Example product list (replace with real data)
  { id: "1", title: "Product 1", price: 30, image: "product1.jpg" },
  { id: "2", title: "Product 2", price: 20, image: "product2.jpg" },
];

// POST request for creating a product (add your logic here)
app.post("/api/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// GET request for fetching products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// DELETE request for removing a product by ID
app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  products = products.filter(product => product.id !== id);
  res.status(200).json({ message: "Product deleted successfully" });
});

// POST request to create a payment intent (Stripe integration)
app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error.message);
    res.status(400).send({ error: error.message });
  }
});

app.listen(7001, () => {
  console.log("Server running on http://localhost:7001");
});
