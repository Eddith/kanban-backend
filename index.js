// index.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//TODO: Middleware
app.use(bodyParser.json());
app.use(cors());

//TODO: MongoDB Connection
mongoose.connect(
  "mongodb+srv://<username>:<password>@cluster0.pqmp6nl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

//TODO: Routes
app.use("/api/boards", require("./routes/boards.js"));

//TODO: Start Server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} URL http://localhost:${PORT}`);
});
