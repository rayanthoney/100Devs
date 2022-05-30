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

		// ========================
		// Middlewares
		// ========================
		app.set("view engine", "ejs");
		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(bodyParser.json());
		app.use(express.static("public"));

		// ========================
		// Routes
		// ========================
		app.get("/", (req, res) => {
			quotesCollection
				.find()
				.toArray()
				.then((results) => {
					console.log(results);
					res.render("index.ejs", { quotes: results });
				})
				.catch((error) => console.error(error));
		});
		app.post("/quotes", (req, res) => {
			quotesCollection
				.insertOne(req.body)
				.then((result) => {
					// Asking the browser to redirect back to '/'
					res.redirect("/");
				})
				.catch((error) => console.error(error));
		});
		app.put("/quotes", (req, res) => {
			// console.log(req.body);
			quotesCollection
				.findOneAndUpdate(
					{ name: "Yoda" },
					{
						$set: {
							name: req.body.name,
							quote: req.body.quote,
						},
					},
					{
						upsert: true,
					}
				)
				.then((result) => {
					console.log(result);
				})
				.catch((error) => console.error(error));
		});
		app.delete("/quotes", (req, res) => {
			quotesCollection
				.deleteOne({ name: req.body.name })
				.then((result) => {
					if (result.deletedCount === 0) {
						return res.json("No quote to delete");
					}
					res.json("Deleted Darth Vader's quote");
				})
				.catch((error) => console.error(error));
		});

		app.listen(3000, function () {
			console.log("listening on 3000");
		});
	})
	.catch((error) => console.error(error));
