# HTML 

## What does **!DOCTYPE  _\<!DOCTYPE html\>_ stand for?

In HTML, the doctype is the required _\<!DOCTYPE html\>_ preamble found at the top of all documents. Its sole purpose is to prevent a browser from switching into so-called "quirks mode" when rendering a document; that is, the _\<!DOCTYPE html\>_ doctype ensures that the browser makes a best-effort attempt at following the relevant specifications, rather than using a different rendering mode that is incompatible with some specifications.
```html
<!DOCTYPE html> << --------- DOCTYPE element
<html lang="en"> 
<head> << -------- Head element
    <meta charset="UTF-8"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

## What does __HTML__ _\<html\>_ stand for? 

The **HTML \<html\> element** represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.
```html
<!DOCTYPE html>
<html lang="en"> <<-------------- The root (top-level element) of an HTML document.
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

## What does __Head__ _\<head\>_ stand for?
 
The **HTML _\<head\>_ element** contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets.
```html
<!DOCTYPE html>
<html lang="en"> 
<head> << -------- Head element
    <meta charset="UTF-8"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

## What does __Meta__ _\<meta\>_ stand for? 
 
The **HTML _\<meta\>_ element** represents Metadata that cannot be represented by other HTML meta-related elements, like _base_, _link_, _script_, _style_, or _title_.
```html
<!DOCTYPE html>
<html lang="en"> 
<head>
    <meta charset="UTF-8"> << -------- Meta element
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> << -------- Meta element
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> << -------- Meta element
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

## What does __Body__ _\<body\>_ stand for?
 
The **HTML _\<body\>_ element** represents the content of an HTML document. There can be only one _\<body\>_ element in a document.
```html
<!DOCTYPE html>
<html lang="en"> 
<head>
    <meta charset="UTF-8"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Document</title>
</head>
<body> << -------- Body element
    
</body>
</html>
```





<head>
<title>
<body> 
<header> 
<footer> 
<article>
<section>
<p> 
<div> 
<span> 
<img>
<aside>
<audio>
<canvas>
<datalist> 
<details> 
<embed>
<nav>
<output> 
<progress> 
<video> 
<ul> 
<ol> 
<li>