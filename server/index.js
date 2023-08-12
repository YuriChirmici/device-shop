require("dotenv").config();
const express = require("express");
const sequelize = require("./database/db");
const cors = require("cors");
const router = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	} catch (err) {
		console.log(err);
	}
}

start();