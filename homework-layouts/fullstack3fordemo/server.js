const express = require("express");
const app = express();
const cors = require("cors");
// THESE SEEM TO AUTO GENERATE????
// const { req } = require("express");
// const { res } = require("express");
////////////////////////////////////
const morgan = require("morgan");
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

let persons = [
	{
		id: 1,
		name: "Arto Hellas",
		number: "040-123456",
	},
	{
		id: 2,
		name: "Ada Lovelace",
		number: "39-44-5323523",
	},
	{
		id: 3,
		name: "Dan Abramov",
		number: "12-43-234345",
	},
	{
		id: 4,
		name: "Mary Poppendieck",
		number: "39-23-6423122",
	},
];

app.get("/api/persons", (req, res) => {
	res.json(persons);
});

app.get("/info", (req, res) => {
	const currentDate = new Date();
	res.send(
		`<h2>Phonebook has info for ${persons.length} people</h2> <h2>${currentDate}</h2>`
	);
});

app.get("/api/persons/:id", (req, res) => {
	const id = req.params.id;
	const entry = persons.find((entry) => entry.id == id);

	if (entry) {
		res.json(entry);
	} else {
		res.statusCode(404).end();
	}
});

app.delete("/api/persons/:id", (req, res) => {
	const id = Number(req.params.id);
	persons = persons.filter((entry) => entry.id !== id);
	res.status(204).end();
});

const generateId = () => {
	const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
	return maxId + 1;
};

app.post("/api/persons", (req, res) => {
	const body = req.body;

	if (!body.name) {
		// CUSTOM ERROR
		return res.status(400).json({ error: "name is missing" });
	}

	if (!body.number) {
		// CUSTOM ERROR
		return res.status(418).json({ error: "number is missing" });
	}

	if (persons.some((entry) => entry.name === body.name)) {
		// RETURN ERROR
		return res.status(409).json({ error: "name must be unique" });
	}

	let entry = {
		id: generateId(),
		name: body.name,
		number: body.number,
	};

	persons.push(entry);
	res.json(entry);
});

app.listen(PORT, () => {
	console.log(
		`The Server is running on on port ${PORT}! Buckle up we betta go catch it!`
	);
});
