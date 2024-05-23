const heading = React.createElement("h1", {id: "heading",
}, "Hello World from React!");

console.log(heading) // JS Object


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
// converts JS Object into HTML code

// THIS WAS JUST ONE SIMPLE ELEMENT.

// HOW TO CREATE MULTIPLE NESTED ELEMENT

{/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> */}

const parent1 = React.createElement("div",{id:"parent"}, 
React.createElement("div",{id:"child"},
React.createElement("h1",{},"nested div's")
)
)

root.render(parent1);

// How to create siblings ?

{/* <div id="parent">
    <div id="child">
        <h1></h1>
        <h1></h1>
    </div>
</div> */}

const parent2 = React.createElement("div",{id:"parent"}, 
React.createElement("div",{id:"child"},
[React.createElement("h2",{},"nested div's"),React.createElement("h2",{},"nested div's")]
)
)

root.render(parent2);

// JSX makes it Easier to do

