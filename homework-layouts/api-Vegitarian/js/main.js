console.log("Hello 100Devs, lets do some JavaScript with API");
// //Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
	let inputVal = document.getElementById("barcode").value;

	if (inputVal.length !== 12) {
		alert(`Please ensure that the barcode is 12 characters`);
		return;
	}

	const url = `https://world.openfoodfacts.org/api/v0/product/${inputVal}.json`

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {  // use json data
			console.log(data);
			if (data.status === 1) {
			const item = new ProductInfo(data.product)
			item.showInfo()
			} else if (data.status === 0) {
				alert(`Product ${inputVal} not found. Please try another.`);
			}
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

class ProductInfo {
	constructor(productData) { // I am passing in data.product
		this.name = productData.product_name
		this.ingredients = productData.ingredients
		this.image = productData.image_url
	}

	showInfo() {
		document.getElementById('product-img').src = this.image
		document.getElementById('product-name').innerText = this.name
	}
}
