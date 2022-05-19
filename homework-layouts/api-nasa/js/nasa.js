// Your API key for rmaxey911@gmail.com is:
// nXE5hbcxBAXe6Vah9ZeKPFb954Smre04esf1MNEL

// You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

// https://api.nasa.gov/planetary/apod?api_key=nXE5hbcxBAXe6Vah9ZeKPFb954Smre04esf1MNEL

// For additional support, please contact us. When contacting us, please tell us what API you're accessing and provide the following account details so we can quickly find you:
// Account Email: rmaxey911@gmail.com
// Account ID: 6e558307-842c-4d2f-aa0f-01b2ae212b1d

/************************/
/*                      */
/************************/

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

/************************/
/*                      */
/************************/

const title = document.querySelector("#title");
const copyright = document.querySelector("#copyright");
const mediaSection = document.querySelector("#media-section");
const information = document.querySelector("#description");

function displaydata(data){
  title.innerHTML=data.title;
}



if(data.hasOwnProperty("copyright")){
  copyright.innerHTML=data.copyright;
  } else{
  copyright.innerHTML=""
  }

  if(data.media_type=="video"){
    mediaSection.innerHTML=videoSection;
    document.getElementById("videoLink").src=data.url;

    }else{
    mediaSection.innerHTML=imageSection;
    document.getElementById("hdimg").href=data.hdurl;
    document.getElementById("image_of_the_day").src=data.url;
    }

    const imageSection =`<a id="hdimg" href="" target="-blank">
     <div class="image-div">
     <img id="image_of_the_day" src="" alt="image-by-nasa">
     </div>
     </a>`

const videoSection=`<div class="video-div"> <iframe id="videoLink" src="