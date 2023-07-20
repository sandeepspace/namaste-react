import React from "react";
import ReactDOM from "react-dom/client";

// React Elemet is an object, when we render to DOM -> It becomes HTML element
// ReactElement --> JS Object -->render--> HTML Element

// const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React !!')
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

//Using JSX (JavaScript XML) - is not HTML IN JS (It's a HTML like syntax)
// JSX transpiled (by PARCEL --> Babel) before it reaches the JS Engine
// Only one parent element

// JSX -->Babel_Covert--> ReactElement --> JS Object -->render--> HTML Element
// Babel --> Javascript Compiler


// React Element
// const heading = (
//     <h1 id="heading" className="head">
//         Namaste React using JSX !!
//     </h1>
// )
// console.log(heading); //same as react element
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// React Component
// Class based
// Functional

// React Fuctional Component  == Returning React Element
// const HeadingComponent = () => (
//     <div id="parent">
//         <h1>Namaste React Fuctional Component !!</h1>
//     </div>
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

// React Element inside the React Functional Component
// const title = (
//     <h1 id="heading" className="head">
//         Title React Element !!
//     </h1>
// )

// const HeadingComponent = () => (
//     <div id="parent">
//         {title}
//         <h1>Heading Fuctional Component !!</h1>
//     </div>
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);


// Nested React Fuctional Component --> Component Composition
// const Title = () => (
//     <h1 id="heading" className="head">
//         Title Fuctional Component !!
//     </h1>
// )

// const HeadingComponent = () => (
//     <div id="parent">
//         {1 + 99}
//         <Title />
//         <Title></Title>
//         {Title()}
//         <h1>Heading Fuctional Component !!</h1>
//     </div>
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);


// React Fragment (Create One Parent/Root) -- behave like an empty tag
// to avoid extra div in DOM, if want to add two root element
const Title = () => (
    <h1 id="heading" className="head">
        Title Fuctional Component !!
    </h1>
)

const HeadingComponent = () => (
    // <div>
    //     <div id="parent1">
    //         <Title />
    //         <h1>Heading Fuctional Component !!</h1>
    //     </div>
    //     <div id="parent2">
    //         <Title />
    //         <h1>Heading Fuctional Component !!</h1>
    //     </div>
    // </div>

    // <React.Fragment>
    //     <div id="parent1">
    //         <Title />
    //         <h1>Heading Fuctional Component !!</h1>
    //     </div>
    //     <div id="parent2">
    //         <Title />
    //         <h1>Heading Fuctional Component !!</h1>
    //     </div>
    // </React.Fragment>

    <>
        <div id="parent1">
            <Title />
            <h1>Heading Fuctional Component !!</h1>
        </div>
        <div id="parent2">
            <Title />
            <h1>Heading Fuctional Component !!</h1>
        </div>
    </>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
