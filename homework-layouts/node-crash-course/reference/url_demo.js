const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// SERIALIZED URL
console.log(myUrl.href);

// TO STRING METHOD SERIALIZED URL
console.log(myUrl.toString());

// HOST (ROOT DOMAIN)
console.log(myUrl.host);

// HOSTNAME
console.log(myUrl.hostname);

// PATHNAME
console.log(myUrl.pathname);

// SERIALIZED QUERY
console.log(myUrl.search);

// PARAMETERS OBJECT
console.log(myUrl.searchParams);

// ADD PARAMETERS
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// LOOP THROUGH PARAMETERS
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
