// JavaScrippt goes here

const keys = document.querySelector(".calculator-buttons");
keys.addEventListener("click", (event) => {
	const { target } = event;
	const { value } = target;
	if (!target.matches("button")) {
		return;
	} else {
		calculator.parseInput(value);
		// console.log(event)
	}
});

const calculator = {
	displayText: "0",
	prevTotal: null,

	parseInput(value) {
		// have any of the "special buttons" been clicked?
		switch (value) {
			case "=":
				// calculate the answer
				break;
			case "AC":
				// clear screen and stored values
				break;
			case ".":
				if (this.displayText == 0) {
					addText(value);
				} else {
					// add value to text string
				}
				break;
			default:
				// add value to text string
				break;
		}
	},

	addText(value) {
		if (this.displayText === "0") {
			this.displayText = "";
		} else if (this.prevTotal !== null) {
			this.displayText = this.prevTotal;
			this.prevTotal = null;
		}
		if (isNaN(+value) && isNaN(+this.displayText)) {
			if (isNaN(this.displayText.slice(-1))) {
				return;
			}
		}
		this.displayText += value;
		// output display text to screen
	},
};
