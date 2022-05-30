// server.js
console.log("May Node be with you");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const connectionString =
	"mongodb+srv://ram911:mu$tbethemu$ic@cluster0.htktv52.mongodb.net/?retryWrites=true&w=majority";

// MongoClient.connect("connectionString", (err, client) => {
// 	// ... do something here
// 	console.log("Connected to Database");
// });

// Using a Promise instead of callbacks
MongoClient.connect(connectionString, { useUnifiedTopology: true })
	.then((client) => {
		console.log("Connected to Database");
		const db = client.db("star-wars-quotes");
		const quotesCollection = db.collection("quotes");
		// Make sure you place body-parser before your CRUD handlers!
		app.use(bodyParser.urlencoded({ extended: true }));
		app.get("/", (req, res) => {
			// do something here
			res.sendFile(__dirname + "/index.html");
			// Note: __dirname is the current directory you're in. Try logging it and see what you get!
			// Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app
		});
		// We normally abbreviate `request` to `req` and `response` to `res`.
		app.post("/quotes", (req, res) => {
			quotesCollection
				.insertOne(req.body)
				.then((result) => {
					// Asking the browser to redirect back to '/'
					res.redirect("/");
				})
				.catch((error) => console.error(error));
		});
		app.listen(3000, function () {
			console.log("listening on 3000");
		});
	})
	.catch((error) => console.error(error));

// mongodb+srv://ram911:<mu$tbethemu$ic>@cluster0.htktv52.mongodb.net/?retryWrites=true&w=majority

// mongodb+srv://<username>:<password>@cluster0.htktv52.mongodb.net/?retryWrites=true&w=majority
