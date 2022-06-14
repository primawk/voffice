const express = require("express");
const cors = require("express");
const corsOptions = require("./configs/corsOptions");
const app = express();
const sequelize = require("./configs/sequelize");
const PORT = process.env.PORT || 3500;

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

(async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ alter: true });
    await sequelize.sync();
    console.log("sequelize connection success!");
  } catch (error) {
    console.log(error);
  }
})();

// routes
app.use("/rooms", require("./routes/rooms"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
