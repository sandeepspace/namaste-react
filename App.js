import React from "react";
import ReactDOM from "react-dom/client";

{/* <div id="parent">
    <div id="child1">
        <h1>I'm h1 tag !!</h1>
        <h2>I'm h2 tag !!</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag !!</h1>
        <h2>I'm h2 tag !!</h2>
    </div>
</div> */}

const parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'child1' }, [
        React.createElement('h1', {}, "I'm h1 tag !!!!!"),
        React.createElement('h2', {}, "I'm h2 tag !!")
    ]),
    React.createElement('div', { id: 'child2' }, [
        React.createElement('h1', {}, "I'm h1 tag !!"),
        React.createElement('h2', {}, "I'm h2 tag !!")
    ])
])
console.log(parent); //return OBJECT not H1 TAG

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);

root.render(parent);

// const heading = React.createElement(
//     'h1',
//     { id: 'heading', abc: 'abc' },
//     'Hello word from react!!'
// );
// console.log(heading); //return OBJECT not H1 TAG

// const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root);

// root.render(heading);