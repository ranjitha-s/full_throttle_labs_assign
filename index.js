const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.json());
app.use(bodyParser.json());

// DB config
const db = config.get("mongoURI");

// Connect to mongo
mongoose
  .connect(process.env.MONGO_URI || db, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use("/users", require("./routes/users"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.get("*", (req, res) => {
  res.json({ hi: "Deepu" });
});

app.listen(port, function () {
  console.log(`Server started on ${port}`);
});
