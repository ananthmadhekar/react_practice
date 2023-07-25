import React from "react";
import ReactDOM from "react-dom/client";

//JSX (transpiled before it reaches the JS) - PARCEL -Babel
const heading = React.createElement("h1", {id: "heading"}, "React Sample ");

//JSX - is not HTML in JS, its HTML-like or XML-like syntax

//JSX => Babel transpiles it to React.createElement = > ReactElement - JS Object => HTMLElement(render)
const jsxHeading = <h1 id="heading">React using JSX</h1>; //- single line
const Title = () => { 
    return (<h1 id="heading">React using JSX</h1>);
};

const head = (
    <head className="head" tabIndex="5">Head Comp</head>
)

//React Functional Component
//Component Composition
const BodyComponent = () =>{
    return(
        <div id="container">
            {head}
            <Title /> 
            
            <article>
                <h1>My First Component</h1>
                <ol>
                    <li>Components: UI Building Blocks</li>
                    <li>Defining a Component</li>
                    <li>Using a Component</li>
                </ol>
            </article>
        </div>
)};

const Comp =() => {
    return (<h1> As usual we can call the function using component call</h1>);
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BodyComponent />);