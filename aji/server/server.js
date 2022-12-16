require("dotenv").config();
const express = require("express");
const cors = require("cors");

const cookieParser = require("cookie-parser");

const adminRouter = require("./routes/adminRouter");
const productRouter = require("./routes/productRouter");
const uploadRouter = require("./routes/uploadRouter");
const orderRouter = require("./routes/orderRouter");
const paymentRouter = require("./routes/paymentRouter");


const errorMiddleware = require("./middleware/Error");
const connectToDb = require("./config/db");

const app = express();

connectToDb();
app.use(
  cors({
    origin: [/netlify\.app$/, /localhost:\d{4}$/],
    credentials: true,
  })
);
app.use(express.json({ limit: "20mb" }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API service running 🚀",
  });
});

app.use("/api/admin", adminRouter);
app.use("/api/products", productRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/orders", orderRouter);
app.use("/api/payment", paymentRouter);

app.use(errorMiddleware);

const server = app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Server shutting down due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Server shutting down due to uncaught exception`);
  process.exit(1);
});
