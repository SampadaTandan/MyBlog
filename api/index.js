const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const User = require("./models/User");

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(
  "mongodb+srv://sampadatandan127:f5HCVnHeBBMALjhB@cluster0.ykwcj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.create({ username, password });
  res.json(userDoc);
});
app.listen(4000);

//mongodb+srv://sampadatandan127:<db_password>@cluster0.ykwcj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//f5HCVnHeBBMALjhB