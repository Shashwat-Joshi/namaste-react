# 03 - Laying The Foundation

## #1 What is `JSX` ?

JSX stands for Javascript XML. It is HTML-like or XML-like syntax. It is an extension for Javascript.

NOTE: JSX is not HTML inside Javascript

NOTE: JSX is not a part of React. React can be written without JSX as well, but the code will be very hard to read. 

## #2 What are the superpowers of JSX?

1. JSX allows us to write HTML like syntax inside Javascipt code! It helps us to create React elements without using React.CreateElement() and appendChild() methods. 
It makes the React code much easier to understand.

for example: 
    with JSX:
        const jsxHeading = <h1 id =”heading”> JSX Heading! </h1>

    without JSX: 
        const heading = React.CreateElement("h1",{ id: heading}, "not a jsx heading");

2. JSX sanitized data and prevents cross-site scripting.
        Cross-site scripting - someone can get access to our JS code and send malicious data which is displayed on screen. They can access cookies, local storage, session storage, info about device and read data.

    If some API passes some malicious data JSX will escape it. It prevents cross-site scripting and sanitizes the data before rendering.

3. JSX shows more useful warnings and errors. 
4. JSX  prevents code injections. (attacks)


## #3 Is JSX valid JavaScript? If not, then how does our app work?

JSX is not valid Javascript and JS Engine does not understand JSX. It only understands ECMAScript or ES6+ code. The browsers can only understand pure HTML or pure Javascript. 

Before the code gets to JS engine, it is transpiled  by a package called Babel. Transpilation is a process in which code is converted in a format which the browser can understand. 

JSX ( transpiled by Babel) -> React.createElement -> React Element -> JS Object -> HTML Element (render)

## #4 type attribute in <script> 

The type attribute of the <script> element indicates the type of script represented by the element: a classic script, an import map, a JS module, speculation rules or a data block

The value of the type attribute represents the type of data represented by the script. 
    i. Attribute is not set, an empty string or a JS MIME type - classic script containing JS code.
    ii. Import map - body of the element contains import map which is a JSON object that developers can use to control how the browser resolves module specifiers when importing JS modules.
    iii. Module - code is treated as a JS module.

text/javascript : It is the basic standard of writing javascript code inside the <script> tag.
Syntax
<script type="text/javascript"></script>
text/ecmascript : this value indicates that the script is following the EcmaScript standards.
module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
text/babel : This value indicates that the script is a babel type and required bable to transpile it.
text/typescript: As the name suggest the script is written in TypeScript.

## #5 {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

A: The Difference is stated below:

{TitleComponent}: This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.
<TitleComponent/> : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the {<  />} expression.
<TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.