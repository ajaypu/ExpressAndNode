// import express from "express";
// import bodyParser from "body-parser";
// import adminRoutes from "../routes/admin.js";
// import shopRoutes from "../routes/shop.js";

// const app = express();
// const port = 3000;

// // middleware...
// app.use(adminRoutes);

// app.use(shopRoutes);

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   res.status(404).send("<h1>Page not found</h1>");
// });

// app.listen(port, (req, res) => {
//   console.log(`Surver running on port ${port}`);
// });

const express = require("express");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not Found!</h1>");
});

app.listen(3000);
