# Theory

## #1 What is Emmet ?

Emmet is a plugin for text editors that allows users to expand simple abbreviations into more complex HTML, XML, and other structured code. It is designed to make it faster and easier to write and edit structured code by providing a shorthand syntax for specifying the structure of the code.

For example, if you want to create an HTML document with a header and a paragraph, you could use the following Emmet abbreviation:

```
html:5
  head
  body
    h1{Header}
    p{Lorem ipsum dolor sit amet.}
```

When you expand this abbreviation using Emmet, it will be converted into the following HTML code:

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <h1>Header</h1>
    <p>Lorem ipsum dolor sit amet.</p>
  </body>
</html>
```

## #2 Difference between a Library and Framework ?

**Library** - Collection of pre-written code.

**Framework** - A set of libraries, provides structure for building and organizing code.

Key difference b/w library and framework is the degree of control they give you over the code.
With a library we have complete control over the code.
On the other hand, with a framework we have to follow the framework's conventions and structure.

## #3 What is CDN ? Why do we use it ?

A CDN (Content Delivery Network) is a network of servers distributed around the world that are used to deliver content more efficiently to users. CDNs work by storing a copy of static content (such as images, JavaScript files, and CSS stylesheets) on servers in multiple locations, so that the content can be delivered to users from a server that is physically closer to them. This can significantly improve the performance of a website or web application, especially for users who are located far away from the origin server.

**Used for:**

- Improved performance
- Increased reliability
- Enhanced security
- Global reach

## #4 Why is React known as React ?

The name "React" was chosen because the library was designed to facilitate the creation of reusable components that can respond to changes in data. In this sense, "React" can be thought of as short for "responsive," as the library helps developers create UI components that can adapt and change in response to data changes.

## #5 What is crossorigin in script tag ?

The crossorigin attribute is a useful tool for allowing web pages to include resources from other origins in a safe and secure manner.

## #6 What is diference between React and ReactDOM ?

React is a JavaScript library for building user interfaces, while ReactDOM is a separate library that provides specific methods for interacting with the Document Object Model (DOM) in a web browser.

In general, React and ReactDOM are used together when building web applications with React, as React provides the tools for building reusable UI components and ReactDOM provides the means for rendering these components to the page. However, it is possible to use React with other DOM manipulation libraries, such as jQuery, if needed.

## #7 What is difference between react.development.js and react.production.js files via CDN ?

The react.development.js and react.production.js files are two different versions of the React library that are intended for use in different environments.

```html
<!-- Development version -->
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>

<!-- Production version -->
<script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
```

The **react.development.js** file is the development version of the React library, and it is intended for use during the development and testing of a web application. This version includes helpful warnings and error messages that can assist developers in debugging their code, as well as other features that are useful for development but not necessarily needed in production.

The **react.production.js** file is the production version of the React library, and it is intended for use when deploying a web application to a production environment. This version is optimized for performance and size, and it does not include the extra debugging and development-related features that are present in the development version.

## #8 What is async and defer?

The **async and defer** attributes are HTML attributes that can be added to `<script>` elements to indicate how the script should be loaded and executed by the browser.

The **async** attribute tells the browser to load and execute the script asynchronously, which means that the script will be loaded in the background while the rest of the page continues to load and render. This can improve the performance of a webpage by allowing the browser to load and execute scripts in parallel with other resources, rather than blocking the rendering of the page until the script has finished loading.

The **defer** attribute, on the other hand, tells the browser to load the script in the background and to execute it only after the page has finished parsing. This can be useful for scripts that do not need to be run as soon as they are loaded, as it allows the browser to continue parsing the rest of the page while the script loads in the background.

Here is an example of how the async and defer attributes can be used in a `<script>` element:

![Async vs defer diagram](https://miro.medium.com/max/1186/1*uNyy0B3r1QUBiD8sDqDgkQ.png)
