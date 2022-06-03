// const { request, response } = require("express");
const { request, response } = require("express");
const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
	"Ice Cube": {
		age: 29,
		birthName: "Jimmy Crack Korn",
		birthLocation: "Westside, Compton",
	},
	"Snoop Dog": {
		age: 35,
		birthName: "Jimmy Crack Korn",
		birthLocation: "Westside, Compton",
	},
	unknown: {
		age: 29,
		birthName: "unkown",
		birthLocation: "unkown",
	},
};

// NETWORK REQUEST
app.get("/", (request, response) => {
	response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
	console.log(request.params.name);
	response.json(rappers);
});

app.listen(PORT, () => {
	console.log(`The Server is now running on port ${PORT}! Betta Go Catch It!`);
});
