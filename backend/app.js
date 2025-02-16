const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

const connectdb = require("./config/connectDatabase");

dotenv.config({ path: path.join(__dirname, "config", "config.env") });

connectdb();

app.use(express.json());
app.use(cors());

const productRoutes = require("./Routes/product");
app.use("/uploads", express.static("uploads"));
app.use("/api/v1", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on Port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});
