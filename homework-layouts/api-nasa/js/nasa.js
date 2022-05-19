// Your API key for rmaxey911@gmail.com is:
// nXE5hbcxBAXe6Vah9ZeKPFb954Smre04esf1MNEL

// You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

// https://api.nasa.gov/planetary/apod?api_key=nXE5hbcxBAXe6Vah9ZeKPFb954Smre04esf1MNEL

// For additional support, please contact us. When contacting us, please tell us what API you're accessing and provide the following account details so we can quickly find you:
// Account Email: rmaxey911@gmail.com
// Account ID: 6e558307-842c-4d2f-aa0f-01b2ae212b1d

const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = "nXE5hbcxBAXe6Vah9ZeKPFb954Smre04esf1MNEL";

function fetchData(){
    try{
      fetch(baseUrl+apiKey)
      .then(response=>response.json())
      .then(json=>{
        console.log(json)
      })
    }catch(error){
      console.log(error)
    }
  }
  fetchData()