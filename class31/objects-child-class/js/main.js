//Create an a class and extend it - Can be anything you would like it to be!

class Animal {
	constructor(name) {
		this._name = name;
	}
	get name() {
		return this._name;
	}
	speak() {
		console.log(`${this._name} makes a sound`);
	}
}
