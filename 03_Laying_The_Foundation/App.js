import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => <h1 id="heading1">TitleComponent</h1>;

const HeaderComponent = () => {
  return (
    <div id="container">
      <TitleComponent />
      <h1>Namaste React</h1>
      <h2>A course on React</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
