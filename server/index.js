require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const start = async () => {
	try {
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	} catch (err) {
		console.log(err);
	}
}

start();