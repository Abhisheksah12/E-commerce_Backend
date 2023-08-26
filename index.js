const express = require("express");
const server = express();
const mongoose = require("mongoose");
const { createProduct } = require("./controller/Product");
const productsRouters = require("./routes/Products");
const brandRouter = require('./routes/Brands')
const categoriesRouter = require('./routes/Categories')
const cors = require('cors')


// middlewares
server.use(cors({
  exposedHeaders:['X-Total-Count']
}))
server.use(express.json()); // to parse req.body
server.use("/products", productsRouters.router);
server.use("/brands", brandRouter.router);
server.use("/categories", categoriesRouter.router);


//database setup
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("Database Connected");
}



server.get("/", (req, res) => {
  res.json({ status: "success" });
});

server.listen(8080, () => {
  console.log("server is connected");
});
